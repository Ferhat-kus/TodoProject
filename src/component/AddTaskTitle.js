import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class AddTaskTitle extends Component {
  render() {
    return (
      <View>
        <Text style={styles.AddTaskTitle}>Yeni Görev Ekle :</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    AddTaskTitle:{
        fontFamily:'PollerOne-Regular',
        color:'#FFF',
        fontSize:30,
        marginVertical:30,
    },
})