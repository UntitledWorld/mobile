import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Signup = () => {
  return (
    <SafeAreaView className="h-full w-full bg-white">
      <View className="items-center justify-center flex-1 bg-veryLight">
        <Text className="text-2xl font-bold">Signup</Text>
      </View>
    </SafeAreaView>
  )
}

export default Signup