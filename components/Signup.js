import authService from '../services/auth.service';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput} from 'react-native';
import styles from '../AppStyles';

export default function SignUp({route, navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    try{
      await authService.signup(email, password).then(
      response => {   
        navigation.push('Dashboard')
      })
    }catch(error){
      console.error(error)
    }
  }
  
  return (
    <SafeAreaView>
      <Text style={styles.title}>Signup</Text>
        <View>
          <TextInput
            type="text"
            placeholder='email'
            value={email}
            onChangeText ={ value => setEmail(value ) }
          />
           <TextInput
            type="password"
            placeholder='Password'
            value={password}
            onChangeText ={ value => setPassword(value ) }
          />
          <Button title="Submit" onPress={() => handleSignup()} />
        </View>
        </SafeAreaView>
  );
}