import { View, Text, Image } from 'react-native'
import React from 'react'
import shoeData from "../shoesMock.json";

const Carousel = ({id}) => {

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
    <View className="bg-veryLight">
        <View className="flex-row items-center justify-center">
            <View className=" w-52 h-52 bg-light rounded-[10px] mb-4 z-0 absolute left-0 top-5">
                <Image resizeMode={'cover'} source={image} className="w-full h-full"/>
            </View>
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
            >
                <Image resizeMode={'cover'} source={image} className="w-full h-full"/>
            </View>
            <View className=" w-52 h-52 bg-light rounded-[10px] mb-4 absolute right-0 top-5 z-0" >
            <Image resizeMode={'cover'} source={image} className="w-full h-full"/>
            </View>
        </View>
        <View className="w-4/5 mx-auto flex-row justify-between items-center">
            <View className="w-full">
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.shoes[id - 1].brand}</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.shoes[id - 1].model}</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.shoes[id - 1].colorway}</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>size <Text className="text-[10px]">{shoeData.shoes[id - 1].size}</Text></Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>owned by @johnsmith</Text>
            </View>
            <View className=" w-16 h-16 rounded-full border-2 border-veryDark">
                <Image resizeMode={'cover'} source={require("../assets/media/users/boy.jpg")} className="w-full h-full rounded-full"/>
            </View>
        </View>
    </View>

  )
}

export default Carousel