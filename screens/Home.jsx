import { Text, ScrollView, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React from 'react';
import Collection from '../components/Collection';

const Home = ({navigation}) => {

  return (
    <SafeAreaView className="bg-white w-full h-full" edges={['top', 'left', 'right']}>
      <View className="flex-1 w-4/5 mx-auto">
        <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-4xl font-medium text-veryDark pt-5" style={{ fontVariant: [ 'small-caps' ] }} >home</Text>
        <Collection name="newly added" handler={(shoeData) => navigation.navigate('ShoeView', {shoeData : shoeData})}/>
        <Collection name="popular" handler={(shoeData) => navigation.navigate('ShoeView', {shoeData : shoeData})}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home