import { StyleSheet, View ,Image} from 'react-native'
import React, { Component } from 'react'
import FlatList from '../../component/FlatList';


export default class Tasks extends Component {
  render() {
    return (
        <View style={styles.TasksContainer}>
          <Image source={require('../../assets/Tasks/Logo/TODO.png')}/>
        <FlatList/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    TasksContainer:{
        flex: 1,
        backgroundColor: '#000',
        paddingTop:100,
        paddingBottom:95,
        alignItems:'center',
    },
})