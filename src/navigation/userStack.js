import { StyleSheet, Text, View,Image,ScrollView } from 'react-native';
import React from 'react';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import News from '../screens/News'
import About from '../screens/About'
import Contact from '../screens/Contact'
import UserData from '../screens/UserData'
import Course from '../screens/Course'
export default function UserStack() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      {/* <Stack.Screen name="Home"component={Home}></Stack.Screen> */}
      <Stack.Screen name="Home"
      options={{
        headerShown:false,
      }}>
        {(props) => <Home {...props} channelName={"app by team Bug-Byte"}
        />}
      </Stack.Screen>

      {/* Course Screen === Settings*/}
      <Stack.Screen name="Settings" component={Course}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitleAlign:'center'
      }}/>

      {/* News Screen */}
      <Stack.Screen name="News" component={News}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitleAlign:'center'}}/>

      {/* UserData*/}
      <Stack.Screen name="Citizen" component={UserData}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitleAlign:'center'}}/>

      {/* Contacts and Links */}
      <Stack.Screen name="Chief Contacts&Links" component={Contact}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitleAlign:'center'}}/>

      {/* About Screen */}
      <Stack.Screen name="About" component={About}
      options={{
        headerTitleStyle:{
          fontSize:20,
          
        },
        headerTitleAlign:'center'}}/>


    </Stack.Navigator>
    </NavigationContainer>
    
    
  );
}
const styles = StyleSheet.create({
  
});