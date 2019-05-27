import React, { Component } from 'react';
import { Button } from 'react-native';
import {Text} from 'react-native';
import {TouchableOpacity} from 'react-native';
import TunePlayer from '../TunePlayer';
import { StyleSheet } from 'react-native';

export default class TunePlayerButton extends Component {
    state = {
        disabled: true,
    }

    render(props) {
        return (
            <TouchableOpacity 
                onPress = {this.play.bind(this)}
                style={styles.PlayButton}
            >
                <Text>Play</Text>
            </TouchableOpacity>


            // <Button
            //     buttonStyle={styles.PlayButton}
            //     title = {this.props.title}
            //     onPress = {this.play.bind(this)}
            //     disabled = {this.state.disabled}
            // />
        )
    }

    async componentDidMount() {
        const loadedEvent = TunePlayer.loaded();
        TunePlayer.load(this.props.tune);
        await loadedEvent;
        this.setState({ disabled: false })
        TunePlayer.playbackUpdated((currentTime) => {
            if(currentTime >= 3) {
                TunePlayer.stop();
            }
        });
        TunePlayer.paused(() => {
            this.setState({ disabled: false });
        });
    }
    
    play() {
        TunePlayer.play();
        this.setState({ disabled: true })
    }
} 




    const styles = StyleSheet.create({
        PlayButton: {
            width:'70%',
            alignItems: 'center',
            backgroundColor: 'green',
            height: '20%',
            justifyContent: 'center',
            borderRadius: 55
          }

      });