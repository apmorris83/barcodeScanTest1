import React, { Component } from 'react';
import { StyleSheet, Dimensions, Text, Model, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Camera from 'react-native-camera';
import axios from 'axios';
import Prompt from 'react-native-prompt';

const cameraIcon = (<Icon name="camera" size={30} />)

const ROOT = 'https://gentle-escarpment-88131.herokuapp.com/api/products';
const POSTROOT = 'https://world.openfoodfacts.org/cgi/product_jqm2.pl';

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
        alert(`${data.data.products[0].name} (${EAN}) Packaging: ${data.data.products[0].packaging}`);
      })
      .catch(function (error) {
        // alert('Hello')
        postProduct(EAN);
    });
}

function postProduct (EAN) {
  axios
    .post(ROOT, {
      code: EAN,
      name: 'Test',
      packaging: 'Test Packaging'
    })
    .then((data) => {alert(`Product ${EAN} added as Test`)})
    .catch((err) => {alert(`Product ${EAN} already in Database - Please scan again!`)});
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
