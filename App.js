import React, { Component } from 'react';
import { View, StatusBar} from 'react-native'
import AddTask from './src/pages/AddTask/Index'
import Login from './src/pages/Login/Index';
import LoginPage from './src/pages/LoginPage/Index';
import SingUp from './src/pages/SingUp/Index';
import NavigationBar from './src/router/NavigationBar';
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
      <NavigationBar />
      </View>
    )
  }
}
