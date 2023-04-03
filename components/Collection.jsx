import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Box from './Box'

const Collection = ({name, handler}) => {

  let shoeList = [];

  if(name === "newly added"){
    shoeList = [1, 2, 3, 4];
  } else if (name === "popular"){
    shoeList = [3, 4, 1, 5];
  } else if (name === "closet"){
    shoeList = [1, 5];
  } else {
    console.log("Collection does not exist");
  }

  return (
    <View className=" pb-2">
      <Text className="text-base font-medium text-veryDark pb-1" style={{ fontVariant: [ 'small-caps' ] }}>{name}</Text>
      <View className="flex flex-row flex-wrap justify-between">
        {shoeList.map((id, index) =>
          <Box key={index} handler={handler} id={id}/>
        )}
      </View>
    </View>
  )
}

export default Collection