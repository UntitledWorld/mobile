import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const ScanInput = ({navigation}) => {
  return (
    <View className="items-center justify-center flex-1 bg-veryLight">
      <Text className="text-2xl font-bold">ScanInput</Text>
      <Button         
        title="Scan A Shoe"
        onPress={() => navigation.navigate('ScanOutput')} 
      />
    </View>
  )
}

export default ScanInput