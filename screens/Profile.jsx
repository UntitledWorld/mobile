import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import Collection from "../components/Collection";

const Profile = ({navigation}) => {
  return (
    <SafeAreaView className="w-full h-full bg-white" edges={['top', 'left', 'right']}>
      <View className="flex-1 w-4/5 mx-auto">
        <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity 
            className="absolute top-[26px] right-0 z-10" 
          >
            <Ionicons name={'settings-outline'} size={25} color={'#080808'} />
          </TouchableOpacity>
          <Text className=" text-4xl font-medium text-veryDark pt-5 w-full text-center mb-8" style={{ fontVariant: [ 'small-caps' ] }} >untitled</Text>
          <View className="w-full items-center">
            <View className=" w-40 h-40 rounded-full border-4 border-veryDark">
              <Image resizeMode={'cover'} source={require("../assets/media/users/boy.jpg")} className="w-full h-full rounded-full"/>
            </View>
          </View>
          <Text className="w-full text-center text-veryDark font-ligt text-xl" style={{ fontVariant: [ 'small-caps' ] }}>@leejavaa</Text>
          <Text className="w-full text-center text-veryDark font-bold text-sm" style={{ fontVariant: [ 'small-caps' ] }}>"virgil was here"</Text>
          <Collection name="closet" handler={(shoeData) => navigation.navigate('ProfileCarousel', {shoeData : shoeData})}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Profile