import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class User extends Component {
  styles = StyleSheet.create({
    userComponent: {
      flex: .05,
      justifyContent: 'flex-start',
      borderWidth: 1
    },
  });
  render() {
    return (
    <View style={this.styles.userComponent}>
      <Text>
       User Comment  {this.props.name} : {this.props.comment}
      </Text>
    </View>
    );
  }
}
