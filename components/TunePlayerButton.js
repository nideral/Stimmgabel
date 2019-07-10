import React, { Component } from 'react';
import TunePlayer from '../TunePlayer';
import { StyleSheet, Text, TouchableOpacity, Platform } from 'react-native';
import { frequencies } from './FrequencyChooser';
import RNShake from 'react-native-shake';

export default class TunePlayerButton extends Component {
    state = {
        disabled: true,
    }

    render(props) {
        return (
                <TouchableOpacity 
                    onPress = {this.play.bind(this)}
                    style={this.state.disabled ? styles.PlayButtonDisabled : styles.PlayButtonEnabled}
                    disabled={this.state.disabled}
                >
                    <Text style={styles.ButtonTitle}>Play</Text>
                </TouchableOpacity>
        )
    }

    async load() {
        const loadedEvent = TunePlayer.loaded();
        const path = `sine_${this.props.freq}`;
        TunePlayer.load(path);
        await loadedEvent;
        this.setState({ disabled: false })
        this.props.onDisableChange(false);
        this.enableShake();
        TunePlayer.playbackUpdated((currentTime) => {
            if(currentTime >= this.props.duration * 0.0001) {
                TunePlayer.stop({ duration: this.props.duration });
            }
        });
        TunePlayer.paused(() => {
            this.setState({ disabled: false });
            this.props.onDisableChange(false);
            this.enableShake();
        });
    }

    async componentDidMount() {
        await this.load();
    }
    
    play() {
        TunePlayer.play();
        this.props.onDisableChange(true);
        this.setState({ disabled: true });
        this.disabledShake();
    }

    enableShake() {
        RNShake.addEventListener('ShakeEvent', () => {
            this.play();
        });
    }

    disabledShake() { RNShake.removeEventListener('ShakeEvent'); }

    componentWillMount() {
        this.enableShake();
    }

    componentWillUnmount() { this.disabledShake(); }

    async componentDidUpdate(prevProps) {
        if (prevProps.freq !== this.props.freq) {
            await this.load();
        }
    }
} 

TunePlayer.defaultProps = {
    freq: frequencies[3],
    onDisableChange: () => {},
    duration: 6000,
}

const styles = StyleSheet.create({
    PlayButtonEnabled: {
        width:'70%',
        height: '10%',
        alignItems: 'center',
        backgroundColor: '#AAEEC8',
        justifyContent: 'center',
        borderRadius: 55,
        marginTop: '-10%',
    },

    PlayButtonDisabled: {
        width:'70%',
        height: '10%',
        alignItems: 'center',
        backgroundColor: '#AAEEC8',
        justifyContent: 'center',
        borderRadius: 55,
        marginTop: '-10%',
        opacity: 0.5,
    },

    ButtonTitle: {
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 25,
        marginTop: Platform.OS === 'ios' ? '-14%' : '-12%',
    },
});
