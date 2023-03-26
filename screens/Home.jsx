import { View, Text, Button, ScrollView } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react'
import Collection from '../components/Collection';

const Home = ({navigation}) => {
  return (
    <SafeAreaView className="flex-1 bg-veryLight w-4/5 mx-auto" edges={['top', 'left', 'right']}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text className="text-4xl font-medium text-veryDark pt-5" style={{ fontVariant: [ 'small-caps' ] }} >home</Text>
      <Collection name="newly added" />
      <Collection name="popular" />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home