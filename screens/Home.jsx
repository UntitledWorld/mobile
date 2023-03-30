import { View, Text, Button, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import Collection from '../components/Collection';
import untitledTokens from "../UntitledTokens.json";
import "@ethersproject/shims";
const { ethers } = require("ethers");

const untitledTokensAddress = "0x30424a385997C6d61C40294944e6Ea3b245edab7";
const alchemyEndpoint = 'https://eth-sepolia.g.alchemy.com/v2/JbuF4QM6bZPjNVhPxhSkdbsJg5slJBtj';

const Home = ({navigation}) => {

  const provider = new ethers.providers.JsonRpcProvider(alchemyEndpoint);
  const contract = new ethers.Contract(
    untitledTokensAddress,
    untitledTokens.abi,
  )

  return (
    <SafeAreaView className="flex-1 bg-veryLight w-4/5 mx-auto" edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text className="text-4xl font-medium text-veryDark pt-5" style={{ fontVariant: [ 'small-caps' ] }} >home</Text>
      <Text>Hello</Text>
      <Collection name="newly added" handler={() => console.log('Do nothing')}/>
      <Collection name="popular" handler={() => console.log('Do nothing')}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home