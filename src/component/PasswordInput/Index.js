import { View, TextInput,TouchableOpacity,StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Index() {
  const [input ,setInput] = useState('');
      const [hidePass,setHidePass] = useState(true);
      return (
          <View style={styles.inputArea}>
          <TextInput
          style={styles.input}
          placeholder='Password'
          value={input}
          onChangeText={(texto) => setInput(texto)}
          secureTextEntry={hidePass}
          />
          <TouchableOpacity onPress={() => setHidePass(!hidePass)}>
            {
              hidePass ?
              <Ionicons name='eye' color='#000' size={30}/>
              :
              <Ionicons name='eye-off' color='#000' size={30}/>
            }
          </TouchableOpacity>
          </View>
      )
}
const styles = StyleSheet.create({
  inputArea:{
        flexDirection:'row',
        paddingHorizontal:20,
        marginBottom:25,
        borderRadius:10,
        backgroundColor:'#FFF',
        color:'#000',
        borderWidth:2,
        borderColor:'#8892A0',
        alignItems:'center',
      },
      input:{
        letterSpacing:4,
        fontFamily:'Nobile-Regular',
        fontSize:18,
        width:'85%',
      },
})
