import { Text, StyleSheet, View, FlatList,TouchableOpacity, } from 'react-native'
import React, { Component } from 'react'
import MyData from "../Data/MyData";
import Icon  from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather'

export default class MyFlatlist extends Component {
    renderContactsItem = ({ item,}) => {
        return (
            <View>
                <View style={styles.MyFlatListArea}>
                    <Text style={styles.Name}>{item.UserName}</Text>
                    <Text style={styles.MyTitle}>Görev Adı :   {item.title}</Text>
                    <Text style={styles.MyDescription}>{item.Description}</Text>
                    <View style={{flexDirection:'row',justifyContent:'flex-end',}} >
                    <TouchableOpacity><Icon  name="pencil" color='#007BFF'marginHorizontal={35} size={30}/></TouchableOpacity>
                    <TouchableOpacity><Feather name="trash-2" color='#C80303' size={30}/></TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.FlatListContainer}>
                <FlatList
                    renderItem={this.renderContactsItem}
                    data={MyData}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    FlatListContainer: {
        paddingBottom: 280,
    },
    MyFlatListArea: {
        backgroundColor: '#FFF',
        width: 300,
        height:'auto',
        marginVertical: 12,
        paddingVertical:15,
        paddingHorizontal: 30,
        borderRadius: 10,
        
    },
    Name: {
        fontFamily:'PaytoneOne-Regular',
        color: 'black',
        fontSize: 12,
        textAlign: 'right',
    },
    MyTitle: {
        fontFamily:'PaytoneOne-Regular',
        color: 'black',
        fontSize: 20,
        marginVertical:5,
    },
    MyDescription: {
        fontFamily:'Pavanam-Regular',
        color: 'black',
        fontSize: 20,
        paddingRight:80,
        paddingVertical:5,
    },
})