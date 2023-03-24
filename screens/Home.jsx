import { View, Text, Button } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="signup"
        onPress={() => navigation.navigate('Signup')}
      />
      <Button
        title="profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="profile carousel"
        onPress={() => navigation.navigate('ProfileCarousel')}
      />
      <Button
        title="scan input"
        onPress={() => navigation.navigate('ScanInput')}
      />
      <Button
        title="scan output"
        onPress={() => navigation.navigate('ScanOutput')}
      />
    </View>
  )
}

export default Home