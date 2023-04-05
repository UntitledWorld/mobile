import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

NfcManager.start();

const ScanInput = ({navigation}) => {

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      const message = await NfcManager.ndefHandler.getNdefMessage();
      console.warn('Tag found', tag);
      console.log('NFC Message:', message);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <SafeAreaView className="h-full w-full bg-white">
        <View className="flex-1 w-4/5 mx-auto">
          <Text className="text-4xl font-medium text-veryDark pt-5" style={{ fontVariant: [ 'small-caps' ] }} >scanner</Text>
          <View className="items-center justify-center pl-4">
            <Ionicons name={'barcode-sharp'} size={250} color={'#080808'}/>
          </View>
          <Text className="text-veryDark text-xl font-bold w-full text-center" 
            style={{ fontVariant: [ 'small-caps' ] }} 
            onPress={() => {
              navigation.navigate('ScanOutput', {shoeID: 2})
              readNdef();
            }} 
          >
            scan a shoe
          </Text>
          <Text className="font-light text-sm text-justify w-full text-veryDark pt-3" style={{ fontVariant: [ 'small-caps' ] }}>all shoes with untitled technology are authenticated and represented by a digital asset, only available to the owner. scan a shoe with our tag to see more information. </Text>
          <Text className="font-bold text-sm text-veryDark w-full text-center absolute bottom-7">00 - 01</Text>
        </View>
    </SafeAreaView>
  )
}

export default ScanInput