import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View, SafeAreaView, Button, Alert, TextInput} from 'react-native';
import styles from '../AppStyles';

export default function Movie({route, navigation}) {
    const [movies, setMovies] = useState(null)
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = useState({
        name: movieName,
        collection_Name: movieCollection,
        year: movieYear,
      });

    const { movieId, movieName, movieCollection, movieYear } = route.params;

    const getMovie = async () => {
        setLoading(true)
        try{
          await fetch(`https://wdv-restful-api.herokuapp.com/api/v1/movies/${movieId}`)
          .then(res => res.json())
          .then(data => {
            console.log({data})
            setValue({
                name: data.name,
                collection_Name: data.collection_Name,
                year: data.year
            })
          })
        }catch(error){
          setError(error.message || "Unexpected Error")
        } finally {
          setLoading(false)
        }
      }
    
      const deleteMovie = async () => {
        try{
            await fetch(`https://wdv-restful-api.herokuapp.com/api/v1/movies/${movieId}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
              setMovies(data)
              Alert.alert('Success!', 'Movie Deleted!');
              navigation.push('Dashboard')
            })
          }catch(error){
           
                console.log('There has been a problem with your fetch operation: ' + error.message);
                 // ADD THIS THROW error
                  throw error;
                
          } finally {
            setLoading(false)
          }
      }
    
      const updateMovie = async () => {
        try{
            await fetch(`https://wdv-restful-api.herokuapp.com/api/v1/movies/${movieId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(value)
            })
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                Alert.alert('Success!', 'Movie Updated!');
                navigation.push('Dashboard')
            })
          }catch(error){
            setError(error.message || "Unexpected Error")
          } finally {
            setLoading(false)
          }
      }

      const onChangeName = (value) => {
        setValue({ ...value, name: value });
      };
    
      const onChangeCollection = (value) => {
        setValue({ ...value, collection_Name: value });
      };
    
      const onChangeYear = (value) => {
        setValue({ ...value, year: value });
      };

      useEffect(() => {
        let ignore = false;
        if(!ignore){
          getMovie();
        }
        return () => {
          ignore = true;
        }
      }, [])

  return (
   <SafeAreaView>
      <View style={styles.nav}>
      <Button color="white" title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
     </View>
     <View style={styles.homeContainer}>
       {isLoading ? <ActivityIndicator/> : (
        <View>
        <Text style={styles.largeHeading}>{value && value.name}</Text>
        <Text style={styles.largeHeading}>{value && value.collection_Name}</Text>
        <Text style={styles.largeHeading}>{value && value.year}</Text>
        <Button title="Delete Movie" onPress={() => deleteMovie()} />
        <View style={styles.formContainer}>
        <TextInput
        placeholder={'Name'}
        onChangeText={(value) => onChangeName(value)}
        value={value.name}
        style={styles.input}
      />
      <TextInput
        placeholder={'Collection'}
        onChangeText={(value) => onChangeCollection(value)}
        value={value.collection_Name}
        style={styles.input}
      />
      <TextInput
        placeholder={'Year'}
        onChangeText={(value) => onChangeYear(value)}
        value={value.year}
        style={styles.input}
      />
      <Button title="Update Movie" onPress={() => updateMovie()} />
        </View>
      </View>
      )}
    </View>
   </SafeAreaView>
  );
}
