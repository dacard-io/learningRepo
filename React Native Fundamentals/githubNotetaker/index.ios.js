/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
// Remember to include any react native components you will be using here
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';

var Main = require('./App/Components/Main');

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111'
  }
})


class githubNotetaker extends Component {
  render() {
    return (
      <NavigatorIOS
          style={styles.container}
          initialRoute = {{
            title: 'Github Notetaker',
            component: Main
          }}
      />
    );
  }
}



AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
