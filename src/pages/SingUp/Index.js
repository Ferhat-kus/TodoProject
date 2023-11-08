import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Input from '../../component/Input'
import MyButton from '../../component/MyButton'

export default class SingUp extends Component {
  render() {
    return (
      <View style={styles.SingUpContainer}>
        <View style={styles.SingUpLogo}>
          <Image style={{margin:30,alignItems:'center',}} source={require('../../assets/SingUp/Logo/TODO.png')} />
        </View>
        <Text style={styles.SingUpTitle}>Kayıt Ol</Text>
        <ScrollView>
          <View style={{ marginBottom: 20, }}>
            <Input placeholder="Kullanıcı Adı" />
            <Input placeholder="İsim" />
            <Input placeholder="Soyisim" />
            <Input placeholder="Numara" />
            <Input placeholder="E-mail" />
            <Input placeholder="Şifre" />
            <Input placeholder="Şifre Tekrar" />
          </View>
          <MyButton text='KAYDET' backgroundColor='#3AEEC3' />

          <View style={{ paddingBottom: 30, }}>
            <View style={{ marginBottom: 100, }}>
              <MyButton text='GERİ DÖN' backgroundColor='#238f75' />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  SingUpContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 55,
    paddingTop: 54,
  },
  SingUpLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  SingUpTitle: {
    letterSpacing:4,
    fontFamily: 'Nobile-Regular',
    marginVertical: 10,
    fontSize: 18,
    color: '#FFF',
  },
})