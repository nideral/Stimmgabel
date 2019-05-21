/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, View, TextInput, Button} from 'react-native';
import TunePlayer from './tune-player';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  state = {
    placeName:"",
    places: [],
    loaded: false,
  }

  placeNameChangedHandler = (val) => {
    this.setState({
      placeName: val
    });
  };

  async componentDidMount() {
    TunePlayer.load('sample_audio');
    await TunePlayer.loaded();
    TunePlayer.playbackUpdated((currentTime) => {
      if(currentTime >= 5) {
        TunePlayer.stop();
      }
    });
    this.setState({ loaded: true })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder ='This is a TextInput'
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style = {styles.placeInput}
          />
          <Button
            style = {styles.placeButton}
            title = 'Tune'
            onPress={TunePlayer.play}
            disabled={!this.state.loaded}
          />
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
