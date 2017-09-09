import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default class Header extends Component {
  styles = StyleSheet.create({
    headerComponent: {
      flex: 0.5,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    header: {
      flex: .15,
    },
    imageBox: {
      flex: .55,
      flexWrap: 'nowrap',
      flexDirection: 'row',
    },
    image: {
      alignSelf: 'center',
      maxWidth: '50%',
      maxHeight: '100%'
    },   
    textBox: {
      flex: .35,
      borderWidth: 1,
      minWidth: '100%',
    },
    textStyle: {
      alignSelf: 'center'
    },
  });
    render() {
    return (
      <View style={this.styles.headerComponent}>
        <View style={this.styles.header}>
          <Text style={this.styles.textStyle}>
            {this.props.message}
          </Text>
        </View>
        <View style={this.styles.imageBox}>
          <Image style={this.styles.image}
          source={require('../assets/images/logo_og.png')}
          />
          <Image style={this.styles.image}
          source={require('../assets/images/logo_og.png')}
          />
        </View>
        <Text style={this.styles.textBox}>
          {this.props.text}
        </Text>
      </View>
    );
  }
 
};
/*
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