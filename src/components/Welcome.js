import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

export default class Welcome extends Component {
  onPressCal () {
    this.props.navigator.push({
      id: 'Calendar'
    })
  }
  onPressBarcode () {
    this.props.navigator.push({
      id: 'Barcode'
    })
  }
  onPressMap () {
    this.props.navigator.push({
      id: 'Map'
    })
  }
  render () {
    return (
      <View style={styles.container}>
        <Icon.Button name="camera" onPress={this.onPressBarcode.bind(this)}>
          <Text style={styles.buttonScan}>Barcode</Text>
        </Icon.Button>
        <Icon.Button name="calendar" onPress={this.onPressCal.bind(this)}>
          <Text style={styles.buttonScan}>Calendar</Text>
        </Icon.Button>
        <Icon.Button name="map" onPress={this.onPressMap.bind(this)}>
          <Text style={styles.buttonScan}>Map</Text>
        </Icon.Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // alignItems: 'flex-end',
    },
    buttonScan: {
      fontFamily: 'Arial',
      fontSize: 30
    }
});
