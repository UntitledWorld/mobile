import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const Carousel = () => {
  return (
    <View className="bg-veryLight">
        <View className="flex-row items-center justify-center">
            <View className=" w-52 h-52 bg-light rounded-[10px] mb-4 z-0 absolute left-0 top-5" />
            <View className=" w-60 h-60 bg-light rounded-[10px] mb-4 z-10" 
                style={{
                    ...Platform.select({
                        ios: {
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 0 },
                        shadowOpacity: 0.15,
                        shadowRadius: 8,
                        },
                        android: {
                        elevation: 24,
                        },
                    })
                }} 
            />
            <View className=" w-52 h-52 bg-light rounded-[10px] mb-4 absolute right-0 top-5 z-0" />
        </View>
        <View className="w-4/5 mx-auto flex-row justify-between items-center">
            <View className="w-full">
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

export default Carousel