import SoundPlayer from 'react-native-sound-player';
import Timer from 'react-native-timer';

const fileType = 'mp3';

export default class TunePlayer {
  static load(tune) {
    try {
      SoundPlayer.loadSoundFile(tune, fileType); 
    } catch (error) {
      console.error('Error loading the tune', error);
    }
  }

  static play() {
    try {
      SoundPlayer.play()
    } catch (error) {
      console.error('Error playing the tune', error)
    }
  }

  static stop() {
    try {
      SoundPlayer.stop()
    } catch (error) {
      console.error('Error stopping the tune', error)
    }
  }

  static loaded() {
    return new Promise((res, rej) => {
      SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
        success ? res() : rej();
      });
    });
  }

  static playbackUpdated(callback) {
    Timer.setInterval('trackCurrentTime', async () => {
      const { currentTime } = await SoundPlayer.getInfo();
      callback(currentTime);
    }, 100);
  }
}
