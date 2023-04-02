import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeStackScreen from './stacks/HomeStackScreen';
import ProfileStackScreen from './stacks/ProfileStackScreen';
import ScanStackScreen from './stacks/ScanStackScreen';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Scan') {
            iconName = focused ? 'scan-circle' : 'scan-outline';
          } else if (route.name === 'ProfileStack'){
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={32} color={color} />;
        },
        tabBarActiveTintColor: '#B01317',
        tabBarInactiveTintColor: '#7F7F7F',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#f3f3f3',
          ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: -2 },
              shadowOpacity: 0.15,
              shadowRadius: 10,
            },
            android: {
              elevation: 24,
            },
          }),
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackScreen} options={{headerShown: false}} />
      <Tab.Screen name="Scan" component={ScanStackScreen} options={{headerShown: false}}/>
      <Tab.Screen name="ProfileStack" component={ProfileStackScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default Navigation