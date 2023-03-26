import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Collection from "../components/Collection";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-veryLight w-4/5 mx-auto" edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <TouchableOpacity 
          className="absolute top-[26px] right-0 z-10" 
        >
          <Ionicons name={'settings-outline'} size={25} color={'#080808'} />
        </TouchableOpacity>
        <Text className=" text-4xl font-medium text-veryDark pt-5 w-full text-center mb-8" style={{ fontVariant: [ 'small-caps' ] }} >untitled</Text>
        <View className="w-full items-center">
          <Ionicons name={'person-circle-outline'} size={170} color={'#080808'} />
        </View>
        <Text className="w-full text-center text-veryDark font-ligt text-xl" style={{ fontVariant: [ 'small-caps' ] }}>@someone</Text>
        <Text className="w-full text-center text-veryDark font-bold text-sm" style={{ fontVariant: [ 'small-caps' ] }}>"virgil was here"</Text>
        <Collection name="closet" handler={() => navigation.navigate('ProfileCarousel')}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Profile