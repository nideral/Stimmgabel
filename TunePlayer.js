import SoundPlayer from 'react-native-sound-player';
import Timer from 'react-native-timer';

const fileType = 'wav';
const MAX_VOLUME = 10;

/**
 * Adapter for react-navtive-sound-player.
 * Able to load, play and stop a tune.
 * Also provides interfaces to listen for loaded and current time events.
 */
export default class TunePlayer {

  static playbackCallback = () => {}
  static pauseCallback = () => {}

  /**
   * Loads a tune and prepares it for playing, stopping the tune
   * @param {String} tune Path to the sound file.
   */
  static load(tune) {
    console.log(tune)
    try {
      SoundPlayer.loadSoundFile(tune, fileType);
    } catch (error) {
      console.error('Error loading the tune', error);
    }
  }

  /**
   *  Plays the loaded tune.
   *  Does not replay when called multiple times.
   */
  static play() {
    SoundPlayer.setVolume(MAX_VOLUME);
    Timer.setInterval('trackCurrentTime', async () => {
      const { currentTime } = await SoundPlayer.getInfo();
      this.playbackCallback(currentTime);
    }, 100);

    try {
      SoundPlayer.play()
    } catch (error) {
      console.error('Error playing the tune', error)
    }
  }

  /**
   * Calculate linear fadeOut according to duration
   */
  static fadeOut({ duration }) {
    const steps = 40;
    const interval = duration / steps;
    const stepSize = 1 / steps;
    let step = 0;

    Timer.setInterval('fadeout', () => {
      if (step >= 1) {
        Timer.clearInterval('fadeout');
        TunePlayer.stop({ fadeOut: false });
      } else {
        SoundPlayer.setVolume(1 - step);
        step += stepSize;
      }
    }, interval);
  }

  /**
   *  Pauses the current track and seeks to the beginning.
   *  Able to replay again.
   */
  static stop({ fadeOut = true, duration = 3000 } = {}) {
    // stops interval for getting info.
    Timer.clearInterval('trackCurrentTime');
    try {
      if (fadeOut) {
        TunePlayer.fadeOut({ duration });
      } else {
        SoundPlayer.pause();
        SoundPlayer.seek(0);
        this.pauseCallback();
      }
    } catch (error) {
      console.error('Error stopping the tune', error)
    }
  }

  /**
   *  Returns Promise which resolves when tune is loaded.
   *  @returns Promise<>
   */
  static loaded() {
    return new Promise((res, rej) => {
      SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
        success ? res() : rej();
      });
    });
  }

  /**
   * Register callback to be called when current time is updated.
   * @param {Function} callback Callback to be called when the track time is updated
   */
  static playbackUpdated(callback = () => {}) {
    this.playbackCallback = callback;
  }

  static paused(callback = () => {}) {
    this.pauseCallback = callback;
  }
}
