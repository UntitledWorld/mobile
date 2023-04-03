import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import shoeData from "../shoesMock.json";

const Box = ({handler, id}) => {

  return (
    <View className="mb-6">
        <TouchableOpacity className=" w-36 h-36 bg-light rounded-[10px] z-10" 
        onPress={() => handler()}
        >
          <Image resizeMode={'cover'} source={require("../assets/media/shoes/nike_air_jordan_4_retro_off_white_sail.png")} className="w-full h-full"/>
        </TouchableOpacity>
        <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.shoes[id - 1].brand}</Text>
        <Text className="text-veryDark font-medium text-xs" style={{ fontVariant: [ 'small-caps' ] }}>
        {shoeData.shoes[id - 1].model}
        </Text>
        <Text className="text-veryDark text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.shoes[id - 1].colorway}</Text>
    </View>
  )
}

export default Box