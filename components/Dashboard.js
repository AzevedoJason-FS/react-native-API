import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View, SafeAreaView, Button,  TextInput} from 'react-native';
import styles from '../AppStyles';

export default function Dashboard({navigation}) {
    const [isLoading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null)
    const [create, setCreate] = useState({
        name: '',
        collection_Name: '',
        year: '',
      });
    

    const getMovies = async () => {
        setLoading(true)
        try{
          await fetch(`https://wdv-restful-api.herokuapp.com/api/v1/movies`)
          .then(res => res.json())
          .then(data => {
            console.log({data})
            setMovie(data)
          })
        }catch(error){
          setError(error.message)
        } finally{
          setLoading(false)
        }
      }

      const saveData = () => {
        setLoading(true);
    
        fetch('https://wdv-restful-api.herokuapp.com/api/v1/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            },
          body: JSON.stringify({
            name: create.name,
            collection_Name: create.collection_Name,
            year: create.year,
          }),
        })
          .then((response) => {
            setLoading(false)
            response.text();
            navigation.replace('Dashboard')
          })
          .then((result) => console.log(result))
          .catch((error) => console.log(error));
      };
    
      const onChangeName = (value) => {
        setCreate({ ...create, name: value });
      };
    
      const onChangeCollection = (value) => {
        setCreate({ ...create, collection_Name: value });
      };
    
      const onChangeYear = (value) => {
        setCreate({ ...create, year: value });
      };

      useEffect(() => {
          getMovies();
      }, [])
    
  return (
   <SafeAreaView>
     <View style={styles.nav}>
        <Button color="white" title="Home" onPress={() => navigation.navigate('HomeScreen')} />
     </View>
     <View style={styles.homeContainer}>
       <Text style={styles.listTitle}>Movies in DB:</Text>
       {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={movie}
          keyExtractor={({ _id }) => _id}
          renderItem={({ item }) => (
            <Button title={item.name} onPress={() => navigation.navigate('Movie', {
                movieId: item._id,
                movieName: item.name,
                movieCollection: item.collection_Name,
                movieear: item.year
              })} />
          )}
        />
      )}
      </View>
      <View style={styles.homeContainer}>
      <Text style={styles.listTitle}>Movie Create</Text>
      <TextInput
        placeholder={'Name'}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Collection'}
        onChangeText={(value) => onChangeCollection(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={'Year'}
        onChangeText={(value) => onChangeYear(value)}
        style={styles.input}
      />
      <Button title={'Submit'} onPress={saveData}/>
      </View>
   </SafeAreaView>
  );
}
