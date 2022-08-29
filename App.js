import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Movie from './components/Movie';
import authService from './services/auth.service';
import 'localstorage-polyfill'; 
import SignUp from './components/SignUp'
import Login from './components/Login';

export default function App() {

  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = authService.getCurrentUser();
    if(user){
      setCurrentUser(user)
    }
  }, []);

  const logOut = () => {
    authService.logout();
  }


const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen}  options={{ title: 'Home' }}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Movie" component={Movie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
