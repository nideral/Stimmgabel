/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format 
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Slider, Platform, ScrollView } from 'react-native';
import TunePlayerButton from './components/TunePlayerButton';
import LinearGradient from 'react-native-linear-gradient';
import FrequencyChooser from './components/FrequencyChooser';
import { frequencies } from './components/FrequencyChooser';
import DurationChooser from './components/DurationChooser';
import BackgroundPlayer from './components/BackgroundPlayer';


export default class App extends Component {
  state = {
    freq: frequencies[0],
    disabled: false,
  }

  render() {
    return (
      <View style={styles.content}>
        <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 1.0, y: 1.0}} colors={['#9ABDEB', '#96FAC3']}style={styles.header}>
          <View style={styles.image}>
            <Image source={require('./img/logo.png')}/>
          </View>
          <Text style={styles.title}>Digitale Stimmgabel</Text>
        </LinearGradient>
        <TunePlayerButton
            onDisableChange={disabled => this.setState({ disabled })}
            freq={this.state.freq}
            title="Play"
            duration={this.state.duration} />
        <View OnDisableChange={disabled => this.setState({ disabled })} style={styles.viewbeforescrollview }>
          <ScrollView style ={styles.scrollstyle} vertical>
            <BackgroundPlayer/>
            <FrequencyChooser onFreqChange={(freq) => this.setState({ freq })} />
            <DurationChooser />

          </ScrollView> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
    flex:1,
    alignItems: 'center',
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
  },


  viewbeforescrollview: {
    width: '100%',
    flex: 1,
    marginTop: 5,
  },

  scrollstyle: {
    width: '100%',
    flexGrow: 1, 
    paddingTop: 20,
    flex: 1,
  }

});
