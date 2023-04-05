import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'

const Box = ({handler, id, shoeURI}) => {

  const [shoeData, setShoeData] = useState('');

  const fetchShoe = () => {
    fetch(`https://ipfs.io/ipfs/${shoeURI}`)
    .then(response => response.json())
    .then(data => {
      setShoeData(data)
    })
    .catch(error => console.log(error));
  }

  const nike_aj4_rofs = require("../assets/media/shoes/nike_air_jordan_4_retro_off_white_sail.png");
  const nb_550_awg = require("../assets/media/shoes/new_balance_550_ald_white_green.png");
  const nike_dl_unc = require("../assets/media/shoes/nike_dunk_low_unc.png");
  const yeezy_v2_zebra = require("../assets/media/shoes/adidas_yeezy_boost_350_v2_zebra.png");
  const lv_skate_marine = require("../assets/media/shoes/louis_vuitton_skate_sneaker_marine.png");

  var image = (shoeData.colorway === "retro off white sail") ?
    nike_aj4_rofs : (shoeData.colorway === "aime leon dore white green") ?
    nb_550_awg : (shoeData.colorway === "UNC") ?
    nike_dl_unc : (shoeData.colorway === "zebra") ?
    yeezy_v2_zebra : (shoeData.colorway === "marine") ?
    lv_skate_marine : {};

  useEffect(() => {
    if(typeof shoeURI !== 'undefined'){
      fetchShoe()
      // console.log('fetched')
    } else {
      // console.log('URI not available yet');
    }
  }, [shoeURI])

  return (
    <View className="mb-6">
        <TouchableOpacity className=" w-36 h-36 bg-light rounded-[10px] z-10" 
        onPress={() => handler(shoeData)} disabled={(shoeData !== '') ? false : true}
        >
          <Image resizeMode={'cover'} source={image} className="w-full h-full"/>
        </TouchableOpacity>
        {
          (shoeData !== '') && 
          <>
            <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.brand}</Text>
            <Text className="text-veryDark font-medium text-xs" style={{ fontVariant: [ 'small-caps' ] }}>
            {shoeData.model}
            </Text>
            <Text className="text-veryDark text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.colorway}</Text>
          </>
        }
    </View>
  )
}

export default Box