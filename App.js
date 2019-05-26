/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import TunePlayerButton from './components/TunePlayerButton'


export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TunePlayerButton tune="tune_440" title="Tune" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center' 
  },
  inputContainer: {
    flexDirection:'row',
    width:'100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width:'70%'
  },
  placeButton: {
    width:'30%'
  }
});
