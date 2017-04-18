import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import axios from 'axios';

const URL = 'https://world.openfoodfacts.org/api/v0/product/'

export default class Barcode extends Component {
    scanBarcode(data) {
        alert();
    }

    componentDidMount() {
        axios
            .get('https://world.openfoodfacts.org/api/v0/product/5449000058386.json')
            .then(function scanBarcode (data) {
                console.log('*************WOOOOOOOO**************************************');
                alert(data.product.product_name);
            })
            .catch(function (error) {
                console.log(error);
            });
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