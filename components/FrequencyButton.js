import React, { Component } from 'react';
import { AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,} from 'react-native';

export const frequencies = [415, 430, 438, 440]

export default class FrequencyButtons extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            freq: frequencies[0],
            active: false
        }
      }
    
      onPress = (freqencie) => {
        this.setState({
          freq: freqencie,
          active: true
        })
      }

      render() {
        return (
            <TouchableOpacity
              style={this.state.active ? styles.ButtonActive : styles.ButtonInactive}
              onPress={this.onPress.bind(this, frequencies[0])}
            >
              <Text> Frequenz 1 </Text>
            </TouchableOpacity>
            
         )
       }
     }

const styles = StyleSheet.create({

    ButtonInactive: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10
    },

    ButtonActive: {
        alignItems: 'center',
        backgroundColor: '#ffcc00',
        padding: 10
      },
  })