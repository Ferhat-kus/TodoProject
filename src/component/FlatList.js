import { Text, StyleSheet, View,FlatList,} from 'react-native'
import React, { Component } from 'react'
import Data from "../Data/Data";

export default class MyFlatlist extends Component {
    renderContactsItem=({item,index}) => {
        return(
            <View>
            <View style={styles.FlatListArea}>
                <Text style={styles.Title}>{item.title}</Text>
                <Text style={styles.Description}>{item.Description}</Text>
            </View>
            </View>
        )
    }
  render() {
    return (
      <View style={styles.FlatListContainer}>
        <FlatList
        renderItem={this.renderContactsItem}
        data={Data}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    FlatListContainer:{
      marginTop:50,
      marginBottom:80,
    },
    FlatListArea:{
        backgroundColor:'#FFF',
        width:300,
        height:'auto',
        marginVertical:7,
        padding:20,
        borderRadius:10,
    },
    Title:{
        fontFamily:'PaytoneOne-Regular',
        color:'black',
        fontSize:22,
    },
    Description:{
      fontFamily:'Pavanam-Regular',
        color:'black',
        fontSize:20,
        lineHeight:28,
        paddingVertical:10,
    },
})