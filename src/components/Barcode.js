import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';

const URL = 'https://world.openfoodfacts.org/api/v0/product/'

export default class Barcode extends Component {
    scanBarcode(data) {
        getName(data.data);
    }
    render() {
        return (
            <Camera
                ref={(cam) => { this.camera = cam; }}
                style={styles.preview}
                onBarCodeRead={code => this.scanBarcode(code)}
                aspect={Camera.constants.Aspect.fill}>
            </Camera>
        );
    }
}

function getName (EAN) {
  axios
      .get(`https://world.openfoodfacts.org/api/v0/product/${EAN}.json`)
      .then(function scanBarcode (data) {
          alert(`${data.data.product.product_name} (${EAN})`);
      })
      .catch(function (error) {
          alert(`PRODUCT ${EAN} DOES NOT EXIST`);
      });
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    }
});
