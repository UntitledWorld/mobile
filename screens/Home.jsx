import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center bg-veryLight">
      <Text className="text-2xl font-bold">Home</Text>
      <Button
        title="login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </View>
  )
}

export default Home