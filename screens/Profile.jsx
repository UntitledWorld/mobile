import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-veryLight w-4/5 mx-auto">
      <ScrollView>
      <TouchableOpacity 
          className="absolute top-[26px] right-0 z-10" 
        >
          <Ionicons name={'settings-outline'} size={25} color={'#080808'} />
        </TouchableOpacity>
        <Text className=" text-4xl font-medium text-veryDark pt-5 w-full text-center mb-8" style={{ fontVariant: [ 'small-caps' ] }} >untitled</Text>
        <View>
          <Ionicons name={'person-circle-outline'} size={150} color={'#080808'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile