import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Color from '../Shared/Color';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

export default function Login() {
  WebBrowser.maybeCompleteAuthSession();

  const [request,response, promptAsync] = Google.useAuthRequest({
    androidClientId: '444713840761-a3bg0224osienh92kklfbr6gp6shv26l.apps.googleusercontent.com',
    
    expoClientId:'444713840761-f2j5qtq438j1lrcdu72cnovkgi42dt7h.apps.googleusercontent.com'
    
  });

  const navigation = useNavigation();

  const handleGoogleSignIn = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <Image source={require('./../Assets/Images/Login.png')} />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Education App</Text>
        <Text style={{ textAlign: 'center', marginTop: 80, fontSize: 20, fontWeight: 'bold' }}>Login/Signup</Text>
        {/* <TouchableOpacity style={styles.button} onPress={()=>promptAsync()}>
          <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={{ color: Color.white, fontSize: 20 }}>Sign In With Google</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
          <Ionicons name="logo-google" size={24} color="white" style={{ marginRight: 10 }} />
          <Text style={{ color: Color.white, fontSize: 20 }}>Sign In With Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    marginTop: -20,
    backgroundColor: "#fff",
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height:'100%'
  },
  welcomeText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    width: 300,
    height: 109,
    left: 40,
    top: 32,
  },
  button: {
    backgroundColor: Color.primary,
    margin: 30,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 51,
    width: 307,
    left: 8,
  }
});
