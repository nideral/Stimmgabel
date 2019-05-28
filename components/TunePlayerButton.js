import React, { Component } from 'react';
import { Button } from 'react-native';
import TunePlayer from '../TunePlayer';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';

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
                    <Text style={styles.ButtonTitle}>Play</Text>
                </TouchableOpacity>
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
            height: '10%',
            alignItems: 'center',
            backgroundColor: '#AAEEC8',
            justifyContent: 'center',
            borderRadius: 55,
            marginTop: '-10%'
          },

          ButtonTitle: {
            color: 'white',
            fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
            fontSize: 25,
            marginTop: Platform.OS === 'ios' ? '-14%' : '-12%',
          },


      });