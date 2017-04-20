import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Calendar extends Component {
  onPressHome () {
    this.props.navigator.push({
      id: 'Welcome'
    })
  }
  onPressBarcode () {
    this.props.navigator.push({
      id: 'Barcode'
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Icon.Button name="home" onPress={this.onPressHome.bind(this)}></Icon.Button>
        <Text style={styles.title}>Map</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
      fontSize: 30,
    },
    btn: {
      right: 100,
    },
    buttonScan: {
      fontFamily: 'Arial',
      fontSize: 15
    }
});
