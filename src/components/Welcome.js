import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Welcome extends Component {
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
        <Icon.Button name="camera" onPress={this.onPressHome.bind(this)}>
          <Text style={styles.buttonScan}>H</Text>
        </Icon.Button>
        <Icon.Button name="camera" onPress={this.onPressBarcode.bind(this)}>
          <Text style={styles.buttonScan}>B</Text>
        </Icon.Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    buttonScan: {
      fontFamily: 'Arial',
      fontSize: 30
    }
});
