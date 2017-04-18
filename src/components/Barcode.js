import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Camera from 'react-native-camera';
import axios from 'axios';

const cameraIcon = (<Icon name="camera" size={30} />)

const ROOT = 'https://world.openfoodfacts.org/api/v0/product/';

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
                <Text style={styles.capture}>{cameraIcon}</Text>
            </Camera>
        );
    }
}

function getName (EAN) {
  axios
      .get(`${ROOT}/${EAN}`)
      .then(function scanBarcode (data) {
        alert(`${data.data.product.product_name} (${EAN}) Packaging: ${data.data.product.packaging}`);
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
    },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
