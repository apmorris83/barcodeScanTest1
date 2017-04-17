import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Barcode from './src/components/Barcode';

export default class barcodeScanTest1 extends Component {
  render() {
    return (
      <Barcode />
    );
  }
}

AppRegistry.registerComponent('barcodeScanTest1', () => barcodeScanTest1);
