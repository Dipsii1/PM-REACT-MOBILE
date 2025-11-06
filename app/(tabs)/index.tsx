import { router } from 'expo-router';
import { useState } from 'react';
import { Platform, StyleSheet, Text,Button, Image,View, Pressable, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {

  const [text, onChangeText] = useState('');

  return (
    <SafeAreaView>
      <Text style={{color:'red', fontSize:30}}>HELLO, WORLD</Text>

      <Button
        title="please press me"
        onPress={() => {alert('This is a button!')}}
        color='red'>
      </Button>

      <Image source={require('@/assets/images/icon.png')}
      style={{width:100, height:100, marginTop:20}}></Image>

      <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
      style={{marginTop:20,width:100, height:100}}></Image>

      <View style={{marginTop:20, backgroundColor:'red', width:100, height:100}}></View>

      <View style={[styles.bulat, {marginTop:20}]}></View>

      <Button title='Go To About Me' onPress={() => {router.push('/about')}}
        color={'red'}>
      </Button>

      <Pressable onPress={() => alert('pressable pressed')} style={{marginTop:20, backgroundColor:'red', padding:10, borderRadius:10}}>
        <Text style={{color:'white'}}>Im Pressable</Text>
      </Pressable>

      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 20, padding: 10, color: 'white' }}
        placeholder="Type here to translate!"
        placeholderTextColor="gray"
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={{ color: 'white' }}>{text}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bulat: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'blue',
  },
});

