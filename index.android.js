/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux';
import ConfigureStore from './src/redux/configureStore.js';
import Main from './src/Main.js';

const Store = ConfigureStore();

export default class Gallery extends Component {
  render() {
    return (
      <Provider store={Store}>
         <Main />
      </Provider>
    );
  }
}



AppRegistry.registerComponent('Gallery', () => Gallery);
