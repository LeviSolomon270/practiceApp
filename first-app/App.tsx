import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/phone.png')} style={styles.image} />
      <Text style={styles.welcomeTxt}>Welcome to my app</Text>
      <Text>Welcome to my app</Text>
      <Text style={styles.boldText}>Enter Name</Text>
      <TextInput placeholder="Bob"/>
      <View style={styles.divider} />
      <Text style={styles.boldText}>Enter Surname:</Text>
      <TextInput placeholder="Burger"/>

      <Button title="Add User" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeTxt: {
    paddingTop: 50,
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: 15,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,

InputFlex: 1,
flexDirection: 'row',
marginTop: 20,
  },
});
