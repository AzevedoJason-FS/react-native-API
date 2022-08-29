import authService from '../services/auth.service';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput} from 'react-native';
import styles from '../AppStyles';

export default function Login({route, navigation}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = async (e) => {
    try{
      await authService.login(email, password).then(
        response => {
            navigation.push('Dashboard')
        })
    }catch(error){
        console.error(error.response.data); 
    }
  }

    return (
        <SafeAreaView>
          <Text style={styles.title}>Login</Text>
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
              <Button title="Submit" onPress={() => handleLogin()} />
            </View>
            </SafeAreaView>
      );
}