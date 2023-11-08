import {StyleSheet, View, TextInput} from 'react-native'
import React, { Component } from 'react'

export default class Input extends Component {
  render() {
    return (
      <View>
        <TextInput
        {...this.props}
        placeholderTextColor="#000"
        style={styles.Input}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    Input:{
        width:300,
        letterSpacing:4,
        fontSize:18,
        fontFamily:'Nobile-Regular',
        paddingHorizontal:20,
        marginBottom:25,
        borderRadius:10,
        backgroundColor:'#FFF',
        color:'#000',
        borderWidth:2,
        borderColor:'#8892A0',
    }
})