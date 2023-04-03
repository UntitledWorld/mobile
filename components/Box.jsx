import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import shoeData from "../shoesMock.json";

const Box = ({handler, id}) => {

  const nike_aj4_rofs = require("../assets/media/shoes/nike_air_jordan_4_retro_off_white_sail.png");
  const nb_550_awg = require("../assets/media/shoes/new_balance_550_ald_white_green.png");
  const nike_dl_unc = require("../assets/media/shoes/nike_dunk_low_unc.png");
  const yeezy_v2_zebra = require("../assets/media/shoes/adidas_yeezy_boost_350_v2_zebra.png");
  const lv_skate_marine = require("../assets/media/shoes/louis_vuitton_skate_sneaker_marine.png");

  var image = (id === 1) ?
    nike_aj4_rofs : (id === 2) ?
    nb_550_awg : (id === 3) ?
    nike_dl_unc : (id === 4) ?
    yeezy_v2_zebra : (id === 5) ?
    lv_skate_marine : console.log("Image not found");

  return (
    <View className="mb-6">
        <TouchableOpacity className=" w-36 h-36 bg-light rounded-[10px] z-10" 
        onPress={() => handler()}
        >
          <Image resizeMode={'cover'} source={image} className="w-full h-full"/>
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