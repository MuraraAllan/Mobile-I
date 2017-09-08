import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Header extends Component {
  styles = StyleSheet.create({
    headerComponent: {
      flex: .15,
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    textStyle: {
      alignSelf: 'center'
    }
  });
    render() {
    return (
      <View style={this.styles.headerComponent}>
        <Text style={this.styles.textStyle}>
          HEADER COMPONENT
        </Text>
      </View>
    );
  }
 
};


/*<Image style = {{height: 40, width: 100}}
source={require('../assets/images/logo_og.png')}
/>
<View style={this.styles.butonBox}>
  <View style={this.styles.child}>
    <Button title='Like' accessibilityLabel="Like the picture " onPress={() => alert(1)}/> 
  </View>
  <View style={this.styles.child}>
    <Button title='Share' accessibilityLabel="Share the picture " onPress={() => alert(2)}/>   
  </View>
  <View style={this.styles.child}>
    <Button title='Comment' accessibilityLabel="Comment the picture " onPress={() => alert(3)}/> 
  </View>
</View>     */