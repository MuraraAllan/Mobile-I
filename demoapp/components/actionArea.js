import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class actionArea extends Component {
  styles = StyleSheet.create({
    buttonBox: {
      flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
      flexWrap: 'wrap',
    },
    child: {
      borderStyle: 'solid',
      alignSelf: 'center'
    }
  });
    render() {
    return (
      <View style={this.styles.buttonBox}>
        <View style={this.styles.child}>
          <Button title='Like' accessibilityLabel="Like the picture " onPress={() => alert(1)}/> 
        </View>
        <View style={this.styles.child}>
          <Button title='Share' accessibilityLabel="Share the picture " onPress={() => alert(2)}/>   
        </View>
        <View style={this.styles.child}>
          <Button title='Comment' accessibilityLabel="Comment the picture " onPress={() => alert(3)}/> 
        </View>
      </View>
    );
  }
 
};



