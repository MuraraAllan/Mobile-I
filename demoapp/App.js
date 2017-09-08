import React, { Component } from 'react';
import { AppRegistry, Text, View, Image, StyleSheet } from 'react-native';
import Header from './components/Header';
import User from './components/User'
import ActionArea from './components/actionArea'

export default class App extends Component {
  styles = StyleSheet.create({
    header: {
      flex: 1,
      flexDirection: 'column',
    },
    image: {
      flex: .50,
      maxWidth: '100%',
    },
   
  });
  render() {
    return (
      // Try setting `flexDirection` to `column`.
      <View style={this.styles.header}>
        <Header style={this.styles.headerComponent}/>
        <Image style = {this.styles.image}
          source={require('./assets/images/logo_og.png')}
          />
        <ActionArea />
        <User name='Thirst' comment='Loving'/>
        <User name='For' comment='React'/>
        <User name='Knowledge' comment='Native'/>
      </View>
    );
  }
};