import { View, Text } from 'react-native'
import React from 'react'
import Box from './Box'

const Collection = ({name, handler}) => {
  return (
    <View className=" pb-2">
      <Text className="text-base font-medium text-veryDark pb-1" style={{ fontVariant: [ 'small-caps' ] }}>{name}</Text>
      <View className="flex flex-row flex-wrap justify-between">
        <Box handler={handler}/>
        <Box handler={handler}/>
        <Box handler={handler}/>
        <Box handler={handler}/>
      </View>
    </View>
  )
}

export default Collection