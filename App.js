/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import JWT from 'expo-jwt';

const key = 'shh';

var token = JWT.encode({ foo: 'bar' }, key);
console.log(token)
var payload = JWT.decode(token, key);
console.log(payload)

import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

import LandingPage from './LandingPage'
import LoginPage from './LoginPage'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#030622'
  }
});
