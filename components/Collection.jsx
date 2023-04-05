import { View, Text, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Box from './Box'
import untitledTokens from "../UntitledTokens.json";
import "@ethersproject/shims";
const { ethers } = require("ethers");

const Collection = ({name, handler}) => {

  const [shoes, setShoes] = useState('');

  const untitledTokensAddress = "0x30424a385997C6d61C40294944e6Ea3b245edab7";
  const alchemyEndpoint = 'https://eth-sepolia.g.alchemy.com/v2/JbuF4QM6bZPjNVhPxhSkdbsJg5slJBtj';
  const provider = new ethers.providers.JsonRpcProvider(alchemyEndpoint);
  const contract = new ethers.Contract(
    untitledTokensAddress,
    untitledTokens.abi,
    provider,
  )

  let shoeList = [];

  if(name === "newly added"){
    shoeList = [1, 2, 3, 4];
  } else if (name === "popular"){
    shoeList = [3, 4, 1, 5];
  } else if (name === "closet"){
    shoeList = [1, 4, 5];
  } else {
    console.log("Collection does not exist");
  }

  const fetchShoeURIs = async () => {
    try {
      const responseUnparsed = []
      const response = [];
      responseUnparsed[0] = await contract.tokenURI(1);
      responseUnparsed[1] = await contract.tokenURI(2);
      responseUnparsed[2] = await contract.tokenURI(3);
      responseUnparsed[3] = await contract.tokenURI(4);
      responseUnparsed[4] = await contract.tokenURI(5);
      response[0] = responseUnparsed[0].replace('ipfs://','');
      response[1] = responseUnparsed[1].replace('ipfs://','');
      response[2] = responseUnparsed[2].replace('ipfs://','');
      response[3] = responseUnparsed[3].replace('ipfs://','');
      response[4] = responseUnparsed[4].replace('ipfs://','');
      setShoes(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchShoeURIs();
  }, [])

  return (
    <View className=" pb-2">
      <Text className="text-base font-medium text-veryDark pb-1" style={{ fontVariant: [ 'small-caps' ] }}>{name}</Text>
      <View className="flex flex-row flex-wrap justify-between">
        {shoeList.map((id, index) =>
          <Box key={index} handler={handler} id={id} shoeURI={shoes[id-1]}/>
        )}
      </View>
    </View>
  )
}

export default Collection