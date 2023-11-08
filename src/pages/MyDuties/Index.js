import {StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import MyButton from '../../component/MyButton';
import AddTaskTitle from '../../component/AddTaskTitle';
import MyFlatlist from '../../component/MyFlatlist';


export default class MyDuties extends Component {
  render() {
    return (
      <View style={styles.MyDutiesContainer}>
        <Image style={{marginVertical:50,}} source={require('../../assets/MyDuties/Logo/TODO.png')}/>
        <AddTaskTitle/>
        <MyButton text='GÖREV EKLE'backgroundColor='#FFF'/>
        <MyFlatlist/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    MyDutiesContainer:{
        flex: 1,
        backgroundColor: '#000',
        paddingVertical:70,
        alignItems:'center',
    },
})