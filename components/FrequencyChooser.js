import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';

export const frequencies = [415, 430, 438, 440]

export default class FrequencyChooser extends Component {
    state = {
        freq: frequencies[0],
    }

    updateFreq(freq) {
        this.setState({ freq })
        this.props.onFreqChange(freq);
    }

    render(props) {
        return (
            <RNPickerSelect
                items={frequencies.map(f => ({ label: f.toString(), value: f }))}
                value={this.state.freq}
                style={{height: 50, width: 100}}
                onValueChange={freq => this.updateFreq(freq) }
                placeholder={{}}
                disabled={this.props.disabled} />
        )
    }

    async componentDidMount() {
        
    }
} 

FrequencyChooser.defaultProps = {
    onFreqChange: () => {},
    disabled: false,
}
