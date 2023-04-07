import { View, Text, TextInput, Button, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView className="h-full w-full bg-white" edges={['top', 'left', 'right']}>
      <ScrollView >
        <View className="flex-1 w-4/5 mx-auto"> 
        
        <Text 
        className=" text-4xl font-normal text-veryDark pt-5 w-full text-center mb-8" 
        style={{ fontVariant: [ 'small-caps' ] }} >
        untitled
        </Text>
        
        <Text 
        className="text-base  text-veryDark pb-1" 
        style={{ fontVariant: [ 'small-caps' ] }}>
        CREATE AN ACCOUNT
        </Text>    

        <View className = "my-4 h-14 text-xl shadow border rounded w-full py-3.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <View className = "py-2 absolute top-1/4  -translate-y-1/4 left-3">
          <Ionicons className = "" name={'person-outline'} size={25} color={'#080808'} />
          </View>
        <TextInput className = "w-full y- block pl-10 text-xl relative md:absolute"
          placeholder = "Username" />
        </View>

        <View className = "my-4 h-14 text-xl shadow border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <View className = "py-2 absolute top-1/4  -translate-y-1/4 left-3">
          <Ionicons className = "" name={'mail-outline'} size={25} color={'#080808'} />
          </View>
        <TextInput className = "w-full y- block pl-10 text-xl relative md:absolute"
          placeholder = "Email" />
        </View>

        <View className = "my-4 h-14 text-xl shadow border rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <View className = "py-2 absolute top-1/4  -translate-y-1/4 left-3">
          <Ionicons className = "" name={'lock-closed-outline'} size={25} color={'#080808'} />
          </View>
        <TextInput className = "w-full y- block pl-10 text-xl"
          placeholder = "Password" 
          secureTextEntry = {true}
          for = "password"/>
        </View>

        <View className = "my-4 h-14 text-xl shadow border rounded w-full py-3.5 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
          <View className = "py-2 absolute top-1/4  -translate-y-1/4 left-3">
          <Ionicons className = "" name={'lock-closed-outline'} size={25} color={'#080808'} />
          </View>
        <TextInput className = "w-full y- block pl-10 text-xl"
          placeholder = "Confrm Password" />
        </View>

        {/* <Button 
        color={'#B01317'} 
        title = "SIGN IN"/> */}
        <TouchableOpacity activeOpacity={0.5} className= "my-4 h-14 text-xl shadow rounded-md w-full py-3.5 px-4 leading-tight focus:outline-none focus:shadow-outline bg-[#B01317]">
          <Text className= "text-xl text-white text-center">SIGN UP</Text>
        </TouchableOpacity>

        <Text 
        className="my-1 font-semibold text-base w-full text-center text-veryDark pb-1" 
        style={{ fontVariant: [ 'small-caps' ] }}>
        OR
        </Text>

        <TouchableOpacity activeOpacity={0.5} className= "my-4 h-14 text-xl shadow rounded-md w-full py-3.5 px-4 leading-tight focus:outline-none focus:shadow-outline bg-light">
          <View className="absolute top-[12.5px] left-4">
            <Ionicons className = "" name={'logo-google'} size={25} color={'#080808'} />
          </View>
          <Text className= "text-lg text-veryDark text-center ">SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} className= "my-4 h-14 text-xl shadow rounded-md w-full py-3.5 px-4 leading-tight focus:outline-none focus:shadow-outline bg-light">
          <View className="absolute top-[12.5px] left-4">
            <Ionicons className = "" name={'logo-apple'} size={25} color={'#080808'} />
          </View>
          <Text className= "text-lg text-veryDark text-center ">SIGN IN WITH APPLE</Text>
        </TouchableOpacity>

        <View className = "flex-row items-center justify-center">
          <Text className="text-base  text-veryDark text-center" 
            style={{ fontVariant: [ 'small-caps' ] }}>Already have an account? 
          </Text>
          <TouchableOpacity 
          className=" " 
          onPress={()=> navigation.navigate('Login')}
          >
              <Text className = "text-uniRed underline"> Sign In</Text> 
          </TouchableOpacity>
        </View>

        </View>
        </ScrollView>  
    </SafeAreaView>
  )
}

export default Signup