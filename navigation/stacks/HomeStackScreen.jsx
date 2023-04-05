import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from "../../screens/Home";
import ShoeView from '../../screens/ShoeView';
import Login from '../../screens/Login';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeSub" component={Home} />
    <HomeStack.Screen name="ShoeView" component={ShoeView} />
    <HomeStack.Screen name="Login" component={Login} />
  </HomeStack.Navigator>
  )
}

export default HomeStackScreen