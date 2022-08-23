import { StyleSheet, Text, View, SafeAreaView, Button, Image} from 'react-native';
import styles from '../AppStyles';
import { Linking } from 'react-native';


export default function HomeScreen({navigation}) {
  return (
   <SafeAreaView>
       <View style={styles.nav}>
        <Button color="white" title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
       </View>
       <View style={styles.homeContainer}>
        <Text style={styles.title}>movieposters</Text>
        <Text style={styles.p}>This is a RESTFUL-API React Application. Fully launched on Heroku with a 
        fully functional CRUD through MongoDB
        </Text>
        <View style={styles.socialBox}>
        <Image style={styles.tinyLogo} source={require('../images/github.png')} />
        <Text style={styles.socialTitle} onPress={() => Linking.openURL('https://github.com/AzevedoJason-FS/react-native-API')}>AzevedoJason-FS/RESTFUL-api</Text>
        </View>
       </View>
       
   </SafeAreaView>
  );
}