import { View, Text, Image } from 'react-native'
import React from 'react'
import ownerData from "../ownership.json";

const Carousel = ({shoeData}) => {

    let id = 1;

    const nike_aj4_rofs = require("../assets/media/shoes/nike_air_jordan_4_retro_off_white_sail.png");
    const nb_550_awg = require("../assets/media/shoes/new_balance_550_ald_white_green.png");
    const nike_dl_unc = require("../assets/media/shoes/nike_dunk_low_unc.png");
    const yeezy_v2_zebra = require("../assets/media/shoes/adidas_yeezy_boost_350_v2_zebra.png");
    const lv_skate_marine = require("../assets/media/shoes/louis_vuitton_skate_sneaker_marine.png");
    const boy = require("../assets/media/users/boy.jpg");
    const batman = require("../assets/media/users/batman.png");
    const ferrari = require("../assets/media/users/ferrari.png");
  
    var image = (shoeData.colorway === "retro off white sail") ?
        nike_aj4_rofs : (shoeData.colorway === "aime leon dore white green") ?
        nb_550_awg : (shoeData.colorway === "UNC") ?
        nike_dl_unc : (shoeData.colorway === "zebra") ?
        yeezy_v2_zebra : (shoeData.colorway === "marine") ?
        lv_skate_marine : {};

    var userImage = (shoeData.colorway === "retro off white sail") ?
        boy : (shoeData.colorway === "aime leon dore white green") ?
        batman : (shoeData.colorway === "UNC") ?
        ferrari : (shoeData.colorway === "zebra") ?
        boy : (shoeData.colorway === "marine") ?
        boy : {};

  return (
    <View className="bg-white">
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
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.brand}</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.model}</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>{shoeData.colorway}</Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>size <Text className="text-[10px]">{shoeData.size}</Text></Text>
                <Text className="text-veryDark font-bold text-xs" style={{ fontVariant: [ 'small-caps' ] }}>owned by @{ownerData.owners[id-1].username}</Text>
            </View>
            <View className=" w-16 h-16 rounded-full border-2 border-veryDark">
                <Image resizeMode={'cover'} source={userImage} className="w-full h-full rounded-full"/>
            </View>
        </View>
    </View>

  )
}

export default Carousel