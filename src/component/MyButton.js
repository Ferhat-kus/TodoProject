import { Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import PropTaypes from 'prop-types';
export default class MyButton extends Component {
  render() {
    const {text,backgroundColor, } = this.props;
    return (
      <TouchableOpacity style={[styles.buttonContainer,{backgroundColor}]}
      >
        <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
  }
}
MyButton.PropTaypes = {
  text: PropTaypes.string.isRequired,
  backgroundColor: PropTaypes.string,
};
const styles = StyleSheet.create({
    buttonContainer:{
        marginBottom:12,
        width:300,
        height:48,
        borderWidth:1,
        borderRadius:8,
        borderColor:'#8892A0',
        alignItems:'center',
        justifyContent:'center',
    },
    buttonText:{
        letterSpacing:4,
        fontFamily:'Nobile-Regular',
        color:'#000000',
        fontSize:18,
        textAlign:'center',
    },
})