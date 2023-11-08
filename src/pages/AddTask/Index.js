import { StyleSheet, View, ScrollView,Image } from 'react-native'
import React, { Component } from 'react'
import Input from "../../component/Input";
import MyButton from "../../component/MyButton";
import AddTaskTitle from "../../component/AddTaskTitle";

export default class AddTask extends Component {
  render() {
    return (
      <View style={styles.AddTaskContainer}>
        <Image style={{marginVertical:30,}} source={require('../../assets/AddTask/Logo/TODO.png')}/>
        <AddTaskTitle/>
                      <ScrollView>
                        <View style={styles.AddTaskArea}>
                            <Input placeholder='Görev Ekle'/>
                            <Input placeholder='Görev Acıklaması'
                            paddingBottom={150}/>
                            <Input placeholder='Görev Ata'/>
                        </View>
                <MyButton text='KAYDET' backgroundColor='#3AEEC3' />
                </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    AddTaskContainer:{
        flex:1,
        backgroundColor:'#000',
        alignItems:'center',
        paddingVertical:80,
    }, 
    AddTaskArea: {
      marginTop:20,
      marginBottom: 50,
    }, 
})