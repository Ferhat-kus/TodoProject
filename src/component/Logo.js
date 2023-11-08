import {View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image source={require('../assets/TODOWhite.png')}/>     
      </View>
    )
  }
}

