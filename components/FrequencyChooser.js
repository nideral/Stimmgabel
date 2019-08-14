import React, { Component } from 'react';
import { AppRegistry,
    StyleSheet,
    TouchableOpacity,
    Text,
    View, Platform} from 'react-native';

export const frequencies = [415, 430, 438, 440]

export default class FrequencyChooser extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            freq: frequencies[0],
            selectedButton: frequencies[0]
        }
      }
    
      updateFreq(freq) {
        this.setState({ freq })
        this.props.onFreqChange(freq);
        this.setState({ selectedButton: freq });
    }

    
    

      render() {
        return (
        
        <View style={styles.containter}>
            <Text style={styles.FunctionTitle}>Frequenz auswählen </Text>
            <View style={styles.row}>
                <TouchableOpacity
                 style={[styles.Button, {backgroundColor:
                    this.state.selectedButton === frequencies[0]
                        ? "#aaeec8"
                        : "#B5C0BF",
                }]}
                onPress={(freq) => this.updateFreq(frequencies[0])}>     
                    <Text style={styles.buttonText}>415 hz </Text>
                </TouchableOpacity>
                    
                <TouchableOpacity
                 style={[styles.Button, {backgroundColor:
                    this.state.selectedButton === frequencies[1]
                        ? "#aaeec8"
                        : "#B5C0BF",
                }]}
                 onPress={(freq) => this.updateFreq(frequencies[1])}> 
                    <Text style={styles.buttonText}>430 hz </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.Button, {backgroundColor:
                        this.state.selectedButton === frequencies[2]
                            ? "#aaeec8"
                            : "#B5C0BF",
                    }]}
                    onPress={(freq) => this.updateFreq(frequencies[2])}> 
                    <Text style={styles.buttonText}>438 hz </Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={[styles.Button, {backgroundColor:
                    this.state.selectedButton === frequencies[3]
                        ? "#aaeec8"
                        : "#B5C0BF",
                }]}
                onPress={(freq) => this.updateFreq(frequencies[3])}> 
                    <Text style={styles.buttonText}>440 hz </Text>
                </TouchableOpacity>
            </View>
    </View>
         )
       }
     }

const styles = StyleSheet.create({


    Button: {
        alignItems: 'center',
        backgroundColor: '#aaeec8',
        paddingTop: 10,
        height: 70,
        borderRadius: 12,
        marginLeft:4,
        marginRight:4,
        width: 80
      },

    row:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 25,
        marginRight: 25
    },

    row2:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
    },

    column:{
        width: '50%',
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
    },

    containter:{
        marginRight: 30,
    },

    buttonText:{
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 19,
        textAlign: "center",
        marginTop: 10
    },

    FunctionTitle:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 21,
        fontWeight: "bold",
        marginLeft: 35,
        textAlign: "left"

    }

  })