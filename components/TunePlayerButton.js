import React, { Component } from 'react';
import { Button } from 'react-native';
import TunePlayer from '../TunePlayer';

export default class TunePlayerButton extends Component {
    state = {
        disabled: true,
    }

    render(props) {
        return (
            <Button
                title = {this.props.title}
                onPress = {this.play.bind(this)}
                disabled = {this.state.disabled}
            />
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
