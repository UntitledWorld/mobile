import { View, Text } from 'react-native'
import React from 'react'
import Carousel from '../components/Carousel'
import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileCarousel = ({navigation, route}) => {
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="flex-1 w-4/5 mx-auto"> 
        <TouchableOpacity 
              className="absolute top-[32px] z-10" 
              onPress={() => navigation.goBack()}
        >
          <Ionicons name={'chevron-back-sharp'} size={20} color={'#080808'} />
        </TouchableOpacity>
        <Text className=" text-4xl font-medium text-veryDark pt-5 w-full text-center mb-16" style={{ fontVariant: [ 'small-caps' ] }} >untitled</Text>
        <View className="flex-1 items-center bg-white w-full">
          <Carousel id={route.params.shoeID}/>
        </View>
        <Text className="font-light text-[10px] text-veryDark w-full text-center absolute bottom-7" style={{ fontVariant: [ 'small-caps' ] }}>these shoes were <Text className="text-uniRed font-medium">authorised by untitled</Text> on the 21st of march 2023. </Text>
      </View>
    </SafeAreaView>
  )
}

export default ProfileCarousel