import React, { Component } from 'react';
import { Text, View, Navigator } from 'react-native';

import Welcome from './components/Welcome';
import Barcode from './components/Barcode';
import Calendar from './components/Calendar';
import Map from './components/Map';

export default class App extends Component {
  render() {
    return (
      <Navigator initialRoute={{id: 'Welcome'}} renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene (route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'Welcome':
        return (<Welcome navigator={navigator} title='Welcome'/>);
      case 'Barcode':
        return (<Barcode navigator={navigator} title='Barcode'/>);
      case 'Calendar':
        return (<Calendar navigator={navigator} title='Calendar'/>);
      case 'Map':
        return (<Map navigator={navigator} title='Map'/>);
    }
  }
}
