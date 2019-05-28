/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format 
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image,Platform } from 'react-native';
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
    alignItems: 'center',
    paddingBottom: "-20%",
  },

  header: {
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    paddingTop: '15%',
    paddingBottom: '10%',
  },

  title: {
    color: 'white',
    marginTop: '5%',
    fontFamily: Platform.OS === 'ios' ? 'Helvetica' : 'Roboto',
    fontSize: 22,
    marginBottom: '10%'
  }
});
