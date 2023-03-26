import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Home from "../../screens/Home";
import Login from "../../screens/Login";
import Signup from "../../screens/Signup";
import Profile from "../../screens/Profile";
import ProfileCarousel from "../../screens/ProfileCarousel";
import ScanInput from "../../screens/ScanInput";
import ScanOutput from "../../screens/ScanOutput";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
  <HomeStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <HomeStack.Screen name="HomeSub" component={Home} />
    <HomeStack.Screen name="Login" component={Login} />
    <HomeStack.Screen name="Signup" component={Signup} />
    <HomeStack.Screen name="Profile" component={Profile} />
    <HomeStack.Screen name="ProfileCarousel" component={ProfileCarousel} />
    <HomeStack.Screen name="ScanInput" component={ScanInput} />
    <HomeStack.Screen name="ScanOutput" component={ScanOutput} />
  </HomeStack.Navigator>
  )
}

export default HomeStackScreen