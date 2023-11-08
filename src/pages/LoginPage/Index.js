import { Text, StyleSheet, View, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import GreenBox from '../../component/GreenBox'
import Input from '../../component/Input'
import MyButton from "../../component/MyButton";
import PasswordInput from '../../component/PasswordInput/Index'

export default class LoginPage extends Component {
    render() {
        return (
            <View style={styles.LoginPagecontainer}>
                <KeyboardAvoidingView behavior="position">
                    <GreenBox />
                    <ScrollView>
                        <View style={styles.LoginArea}>
                            <Text style={styles.LoginPageSingInText}>Üye Girişi</Text>
                            <Input
                             placeholder='Kullanıcı Adı'
                             />
                             <PasswordInput/>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                <MyButton text='GİRİŞ YAP' backgroundColor='#3AEEC3' />
                <MyButton text='GERİ DÖN' backgroundColor='#238f75' />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    LoginPagecontainer: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 55,
        paddingVertical:92,
    },
    LoginArea: {
        marginVertical: 10,
    },
    LoginPageSingInText: {
        fontFamily:'Nobile-Regular',
        marginVertical:30,
        color: '#FFF',
        fontSize: 18,
    },
})