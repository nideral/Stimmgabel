import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity, Text, View, Platform, Switch, Image} from 'react-native';
import Overlay from 'react-native-modal-overlay';



export default class BackgroundPlayer extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            modalVisible: false, 
        }
      }

      onClose = () => this.setState({ modalVisible: false});
      close = () => this.setState({ modalVisible: false});
      openOverlay = () => this.setState({ modalVisible: true});
    
      render() {
        return (
            <View style={styles.containter}>
                <View style={styles.row}>
                        <Text style={styles.FunctionTitle}>Autoplay Modus</Text>
                        <Switch style={styles.Switch}onChange = {this.openOverlay}/>  
                </View>    
                <Text style={styles.Text}>Wenn Sie den Autoplay Modus aktivieren, kann der Ton auch bei geschlossener App augegeben werden.</Text>
                <Overlay visible={this.state.modalVisible} onClose={this.onClose}>
                    <Image source={require('../img/shake-phone.png')}/>
                    <Text style={styles.Title}>Autoplay Modus aktiviert</Text>
                    <Text style={styles.OverlayText}>Sie können die App nun schliessen. Wenn Sie Ihr Smartphone schütteln wird der Ton der Stimmgabel automatisch ausgegeben.</Text>
                    <TouchableOpacity onPress={this.close} style={styles.CloseButton}><Text style={styles.buttonText}>Deaktivieren</Text></TouchableOpacity>
                </Overlay>
            </View>
         )
       }
     }

const styles = StyleSheet.create({

    containter:{
        marginRight: 30,
        //paddingTop: 40,
        marginLeft: 35,
        marginBottom:20
    },

    Text:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 18,
        marginTop: 10,
        marginBottom:20,
    },

    OverlayText:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 18,
        textAlign: "center",
        marginTop: 15,
        marginBottom: 20,
        paddingLeft: 10,
    },

    Switch:{
        position: "absolute",
        right: 0
    },

    Title:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "left",
        marginTop: 20,
    },

    FunctionTitle:{
        color: '#847B7B',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 21,
        fontWeight: "bold",
        textAlign: "left"
    },

    CloseButton:{
        alignItems: 'center',
        backgroundColor: '#847B7B',
        height: 60,
        width: '100%',
        borderRadius: 12,
        paddingTop: 10,
        paddingLeft:20,
        paddingRight:20,
    },

    buttonText:{
        color: 'white',
        fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
        fontSize: 25,
        textAlign: "center",
    },


    row:{
        flexDirection: 'row',
    },


  })