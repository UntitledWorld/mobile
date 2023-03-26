import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const Box = ({handler}) => {
  return (
    <View className="mb-6">
        <TouchableOpacity className=" w-36 h-36 bg-light rounded-[10px] z-10" 
        onPress={() => handler()}
        >
          <Image resizeMode={'cover'} source={require("../assets/media/shoes/nike_air_jordan_4_retro_off_white_sail.png")} className="w-full h-full"/>
        </TouchableOpacity>
        <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>nike</Text>
        <Text className="text-veryDark font-medium text-xs" style={{ fontVariant: [ 'small-caps' ] }}>
            air jordan <Text className="text-[10px]">4</Text>
        </Text>
        <Text className="text-veryDark text-xs" style={{ fontVariant: [ 'small-caps' ] }}>retro off white sail</Text>
    </View>
  )
}

export default Box