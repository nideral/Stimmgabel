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
            active: false
        }
      }
    
      updateFreq(freq) {
        this.setState({ freq })
        this.props.onFreqChange(freq);
    }

      render() {
        return (
            <View style={styles.containter}>
                <Text style={styles.FunctionTitle}>Frequenz auswählen </Text>
                <View style={styles.row1}>
                    <View style={styles.column}>
                        <TouchableOpacity
                        style={this.state.active ? styles.ButtonActive : styles.ButtonInactive}
                        onPress={(freq) => this.updateFreq(frequencies[0])}> 
                            <Text style={styles.buttonText}>415 </Text>
                        </TouchableOpacity>
                    </View>    
                    <View style={styles.column}>
                        <TouchableOpacity
                        style={this.state.active ? styles.ButtonActive : styles.ButtonInactive}
                        onPress={(freq) => this.updateFreq(frequencies[1])}> 
                            <Text style={styles.buttonText}>430 </Text>
                        </TouchableOpacity>
                    </View>   
                </View>
                <View style={styles.row2}>
                <View style={styles.column}>
                    <TouchableOpacity
                    style={this.state.active ? styles.ButtonActive : styles.ButtonInactive}
                    onPress={(freq) => this.updateFreq(frequencies[2])}> 
                        <Text style={styles.buttonText}>438 </Text>
                    </TouchableOpacity>
                    </View>    
                    <View style={styles.column}>
                    <TouchableOpacity
                    style={this.state.active ? styles.ButtonActive : styles.ButtonInactive}
                    onPress={(freq) => this.updateFreq(frequencies[3])}> 
                        <Text style={styles.buttonText}>440 </Text>
                    </TouchableOpacity>
                </View>   
            </View>
        </View>
         )
       }
     }

const styles = StyleSheet.create({

    ButtonInactive: {
      alignItems: 'center',
      backgroundColor: '#aaeec8',
      padding: 10,
      height: '100%',
      borderRadius: 12
    
    },

    ButtonActive: {
        alignItems: 'center',
        backgroundColor: '#aaeec8',
        padding: 10,
        height: '100%',
        borderRadius: 12
       
        
      },

    row1:{
        width: '100%',
        flexDirection: 'row',
        height:'25%',
        marginTop: 30
        

    },
    row2:{
        width: '100%',
        flexDirection: 'row',
        height:'25%',
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
        fontSize: 25,
        textAlign: "center",
        marginTop: 20
    },

    FunctionTitle:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 21,
        fontWeight: "bold",
        marginLeft: 35,
        marginTop: 30,
        textAlign: "center"

    }

  })