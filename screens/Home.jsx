import { Text, ScrollView, Button, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from 'react'
import Collection from '../components/Collection';

const Home = ({navigation}) => {

  return (
    <SafeAreaView className="bg-white w-full h-full" edges={['top', 'left', 'right']}>
      <View className="flex-1 w-4/5 mx-auto">
        <ScrollView showsVerticalScrollIndicator={false}>
        <Button title='Sign up ' onPress={()=> navigation.navigate('Signup')}/>
        <Text className="text-4xl font-medium text-veryDark pt-5" style={{ fontVariant: [ 'small-caps' ] }} >home</Text>
        <Collection name="newly added" handler={(id) => navigation.navigate('ShoeView', {shoeID : id})}/>
        <Collection name="popular" handler={(id) => navigation.navigate('ShoeView', {shoeID : id})}/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Home