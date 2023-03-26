import { View, Text } from 'react-native'
import React from 'react'
import Box from './Box'

const Collection = ({name}) => {
  return (
    <View className=" pb-2">
      <Text className="text-base font-medium text-veryDark pb-1" style={{ fontVariant: [ 'small-caps' ] }}>{name}</Text>
      <View className="flex flex-row flex-wrap justify-between">
        <Box />
        <Box />
        <Box />
        <Box />
      </View>
    </View>
  )
}

export default Collection