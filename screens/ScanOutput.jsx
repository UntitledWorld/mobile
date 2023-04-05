import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import BoxLarge from '../components/BoxLarge';
import untitledTokens from "../UntitledTokens.json";
import "@ethersproject/shims";
const { ethers } = require("ethers");

const ScanOutput = ({navigation, route}) => {
  
  const [shoeData, setShoeData] = useState('');

  const untitledTokensAddress = "0x30424a385997C6d61C40294944e6Ea3b245edab7";
  const alchemyEndpoint = 'https://eth-sepolia.g.alchemy.com/v2/JbuF4QM6bZPjNVhPxhSkdbsJg5slJBtj';
  const provider = new ethers.providers.JsonRpcProvider(alchemyEndpoint);
  const contract = new ethers.Contract(
    untitledTokensAddress,
    untitledTokens.abi,
    provider,
  )

  const fetchShoe = (shoeURI) => {
    fetch(`https://ipfs.io/ipfs/${shoeURI}`)
    .then(response => response.json())
    .then(data => {
      setShoeData(data)
    })
    .catch(error => console.log(error));
  }

  const fetchShoeURI = async () => {
    try {
      let responseUnparsed = ""
      let response = "";
      responseUnparsed = await contract.tokenURI(route.params.shoeID);
      response = responseUnparsed.replace('ipfs://','');
      fetchShoe(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShoeURI()
  }, [])

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="flex-1 w-4/5 mx-auto">
        <TouchableOpacity 
            className="absolute top-[32px] z-10" 
            onPress={() => navigation.goBack()}
          >
            <Ionicons name={'chevron-back-sharp'} size={20} color={'#080808'} />
          </TouchableOpacity>
          <Text className=" text-4xl font-medium text-veryDark pt-5 w-full text-center mb-8" style={{ fontVariant: [ 'small-caps' ] }} >untitled</Text>
          {
            (shoeData !== '') &&
            <BoxLarge shoeData={shoeData}/>
          }
          <Text className="font-light text-[10px] text-veryDark w-full text-center absolute bottom-0" style={{ fontVariant: [ 'small-caps' ] }}>these shoes were <Text className="text-uniRed font-medium">authorised by untitled</Text> on the 21st of march 2023. </Text>
      </View>
    </SafeAreaView>
  )
}

export default ScanOutput