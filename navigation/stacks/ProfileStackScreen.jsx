import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Profile from "../../screens/Profile";
import ProfileCarousel from "../../screens/ProfileCarousel";

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
  <ProfileStack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
    <ProfileStack.Screen name="Profile" component={Profile} />
    <ProfileStack.Screen name="ProfileCarousel" component={ProfileCarousel} />
  </ProfileStack.Navigator>
  )
}

export default ProfileStackScreen