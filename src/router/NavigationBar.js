import React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyDuties from '../pages/MyDuties/Index'
import Tasks from '../pages/Tasks/Index'
import Main from '../pages/Main/Index'
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 10,
    right: 20,
    left: 20,
    borderRadius: 30,
    elevation: 0,
    height: 60,
    backgroundColor: '#3AEEC3',
    borderTopWidth: 2, 
    borderTopColor: '#4DB4FF', 
  },
};

export default function NavigationBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}initialRouteName="Main">
        <Tab.Screen 
          name="Tasks" 
          component={Tasks}
          options={{
            tabBarIcon: ({}) => (
              <Icon name="barcode-outline" color='white' size={38} />
            ),
          }}
        />
        <Tab.Screen 
          name="Main" 
          component={Main}
          options={{
            tabBarIcon: ({}) => (
              <View style={{
                width: 100,
                height: 100,
                backgroundColor: 'black',
                marginBottom:60,
                borderRadius: 50, 
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image source={require('../assets/router/NavigationIcon/T.svg')}/>
              </View>
            ),
          }}
        />
        <Tab.Screen 
          name="MyDuties" 
          component={MyDuties}
          options={{
            tabBarIcon: ({}) => (
              <FontAwesome5 name="user-circle" color='white' size={38} />
            ),
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
