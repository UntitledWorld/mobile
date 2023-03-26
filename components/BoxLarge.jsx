import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const BoxLarge = () => {
  return (
    <View className="mx-auto">
        <View className=" w-72 h-72 bg-light rounded-[10px] mb-4" 
        style={{
            ...Platform.select({
                ios: {
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 7 },
                  shadowOpacity: 0.15,
                  shadowRadius: 20,
                },
                android: {
                  elevation: 24,
                },
              })
        }}
        >
          <Image resizeMode={'cover'} source={require("../assets/media/shoes/nike_air_jordan_4_retro_off_white_sail.png")} className="w-full h-full"/>
        </View>
        <View className="flex-row justify-between items-center">
            <View>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>nike</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>air jordan <Text className="text-[10px]">4</Text></Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>retro off white sail</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>size <Text className="text-[10px]">8</Text></Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>owned by @johnsmith</Text>
            </View>
            <View className=" w-16 h-16 rounded-full border-2 border-veryDark">
              <Image resizeMode={'cover'} source={require("../assets/media/users/boy.jpg")} className="w-full h-full rounded-full"/>
          </View>
        </View>
    </View>
  )
}

export default BoxLarge