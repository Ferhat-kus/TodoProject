import { Text, StyleSheet, View,Image } from 'react-native'
import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainTitle}>HOŞGELDİNİZ</Text>
        <Image source={require('../../assets/Main/Logo/TODO.png')} />
        <Text style={styles.mainDescription}>Todo uygulamanızı kullanarak yapılacaklar listesi oluşturabilir,görevlerinizi takip edebilir ve düzenleyebilirsiniz.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

  mainContainer:{
        flex:1,
        backgroundColor:'#000',
        justifyContent:'center',
        alignItems:'center',
      },
      mainTitle:{
        letterSpacing:4,
        fontSize:20,
        fontFamily:'Nobile-Regular',
        color:'#FFF',
        paddingVertical:32,
      },
      mainDescription:{
        fontSize:16,
        color:'#FFF',
        fontFamily:'Nobile-Regular',
        textAlign:'center',
        paddingHorizontal:26,
        paddingTop:146,
      },
    
})