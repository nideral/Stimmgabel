import React, { Component } from 'react';
import { Picker } from 'react-native';

export const frequencies = [415, 430, 438, 440]

export default class FrequencyChooser extends Component {
    state = {
        freq: frequencies[0],
    }

    PickerItems() {
        return frequencies.map((freq) => {
            return(
                <Picker.Item key={freq} label={freq.toString()} value={freq} />
            );
        });
        }

    updateFreq(freq) {
        this.setState({ freq })
        this.props.onFreqChange(freq);
    }

    render(props) {
        return (
            <Picker
                selectedValue={this.state.freq}
                style={{height: 50, width: 100}}
                onValueChange={(freq) => this.updateFreq(freq) }>
                {this.PickerItems()}
            </Picker>
        )
    }

    async componentDidMount() {
        
    }
} 

FrequencyChooser.defaultProps = {
    onFreqChange: () => {},
}
