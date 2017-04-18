import React from 'react';
import { TabNavigator } from 'react-navigation';

import Welcome from '../components/Welcome';
import Barcode from '../components/Barcode';

export const Tabs = TabNavigator({
  Welcome: {
    screen: Welcome
  },
  Barcode: {
    screen: Barcode
    }
})
