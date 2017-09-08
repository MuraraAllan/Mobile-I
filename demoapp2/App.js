import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';
import HistoryTeller from './components/HistoryTeller'

export default class App extends Component {
  styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: .30,
      minWidth: '100%',
      maxWidth: '100%',
    },
   
  });
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={this.styles.header}>
        <Image style = {this.styles.image}
          source={require('./assets/images/logo_og.png')}
          />
        <HistoryTeller text='THIS IS A DYNAMIC TEXT, I PUT WHAT I WANTTT' message='THIS IS GREAT STUFFSSSSSSSSSSSS'/>
        <HistoryTeller text='Este texto é dinamico ehheehhe ' message='THIS IS GREAT STUFF'/>
      </View>
    );
  }
};