/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format 
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import TunePlayerButton from './components/TunePlayerButton';
import LinearGradient from 'react-native-linear-gradient';


export default class App extends Component {

  render() {
    return (
      <View style={styles.content}>
        <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} colors={['#9ABDEB', '#96FAC3']}style={styles.header}>
          <View style={styles.image}>
           <Image source={require('./img/logo.png')}/>
          </View>
          <Text style={styles.title}>Digitale Stimmgabel</Text>
         </LinearGradient>
         <TunePlayerButton tune="tune_440" title="Play"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flex:1,
    //backgroundColor: 'red',
    alignItems: 'center',
    paddingBottom: "-20%",
    //colors: ['#9ABDEB', '#96FAC3'],
    //start: { x: 0.1, y: 0.1 },
    //end: { x: 9.9, y: 9.9 }

  },

  header: {
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    //backgroundColor: 'blue',
    paddingTop: '15%',
    paddingBottom: '10%',
    //colors:['#4c669f', '#3b5998', '#192f6a']
  },

  title: {
    color: 'white',
    marginTop: '5%',
    fontFamily: 'Roboto',
    fontSize: 20,
    marginBottom: '10%'
  }

 /*  placeInput: {
    width:'100%'
  },
  placeButton: {
    width:'100%'
  } */
});
