/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import TunePlayerButton from './components/TunePlayerButton'


export default class App extends Component {

  render() {
    return (
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.image}>
           <Image source={require('./img/logo.png')}/>
          </View>
          <Text style={styles.title}>Digitale Stimmgabel</Text>
          <TunePlayerButton tune="tune_440" title="Play"/>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    paddingBottom: "-20%"
  },

  header: {
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingTop: '10%'
  },

  title: {
    color: 'white',
    marginTop: '5%',
    fontFamily: 'Roboto',
    fontSize: 20,
  },

 /*  placeInput: {
    width:'100%'
  },
  placeButton: {
    width:'100%'
  } */
});
