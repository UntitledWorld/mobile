import { View, Text } from 'react-native'
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
        }} />
        <View className="flex-row justify-between items-center">
            <View>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>nike</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>air jordan <Text className="text-[10px]">4</Text></Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>retro off white sail</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>size <Text className="text-[10px]">8</Text></Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>owned by @johnsmith</Text>
            </View>
            <Ionicons name={'person-circle-outline'} size={60} color={'#080808'} />
        </View>
    </View>
  )
}

export default BoxLarge