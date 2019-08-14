import React, { Component } from 'react';
import { AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View, Platform, Slider} from 'react-native';

export const frequencies = [415, 430, 438, 440]

export default class DurationChooser extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            duration: 6000,
            Screenduration: this.duration/1000
        }
      }
    
      updateFadeOutDuration(duration) {
        this.setState({ duration: duration * 1000 });
      }
    

      render() {
        return (
            <View style={styles.containter}>

                <View style={styles.row}>
                    <Text style={styles.FunctionTitle}>Klingdauer auswählen </Text>
                    <Text style={styles.Duration}> {this.state.Screenduration} Sekunden </Text>
                </View>  
                <Slider 
                        style={styles.slider}
                        minimumValue={2}
                        maximumValue={10}
                        onSlidingComplete={v => this.updateFadeOutDuration(v)}
                    />
            </View>
         )
       }
     }

const styles = StyleSheet.create({

    containter:{
        marginRight: 30,
        paddingTop: 40,
    },


    FunctionTitle:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 21,
        fontWeight: "bold",
        marginLeft: 35,
        textAlign: "left"

    },

    slider:{
        marginLeft: 30,
        width: 350, 
        height: 100,
    },

    row:{
        flexDirection: 'row',
    },

    Duration:{
        position: "absolute",
        right: 0,
        fontSize: 15,
    },


  })