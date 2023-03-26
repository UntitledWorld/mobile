import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const Profile = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center bg-veryLight">
      <Text className="font-bold text-2xl">Profile</Text>
      <Button         
        title="Carousel"
        onPress={() => navigation.navigate('ProfileCarousel')} 
      />
    </View>
  )
}

export default Profile