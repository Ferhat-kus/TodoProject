import { StyleSheet, View, TouchableOpacity, Text,} from 'react-native'
import React, { Component } from 'react'
import MyButton from "../../component/MyButton";
import GreenBox from "../../component/GreenBox";
import LoginPage from '../LoginPage/Index'

export default class Login extends Component {
  render() {
    return (
      <View style={styles.LoginContainer}>
        <View style={styles.box1}>
          <GreenBox />
        </View>
        <View style={styles.box}>
          <MyButton
            text="Üye Girişi"
            backgroundColor="#3AEEC3"
          />
          <TouchableOpacity style={styles.singUp}><Text style={styles.singUpText}>Kayıt Ol</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 1,
    alignItems: 'center',
  },
  singUpText: {
    fontFamily: 'Nobile-Regular',
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
  },
})