import {StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class GreenBox extends Component {
  render() {
    return (
        <View style={styles.greenBox}>
        <Image resizeMode='contain' source={require('../assets/GreenBox/Logo/TODO.png')}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
    greenBox:{
        width:300,
        height:300,
        borderRadius:150,
        marginVertical:10,
        backgroundColor:'#3AEEC3',
        alignItems:'center',
        justifyContent:'center',
    },
})