import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import ScanInput from '../../screens/ScanInput';
import ScanOutput from '../../screens/ScanOutput';

const ScanStack = createNativeStackNavigator();

const ScanStackScreen = () => {
  return (
  <ScanStack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
    <ScanStack.Screen name="ScanInput" component={ScanInput} />
    <ScanStack.Screen name="ScanOutput" component={ScanOutput} />
  </ScanStack.Navigator>
  )
}

export default ScanStackScreen