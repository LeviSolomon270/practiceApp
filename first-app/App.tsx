import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Welcome to my app</Text>
      <Text>Enter Name</Text>
      <TextInput placeholder="Bob"/>
      <Text>Enter Surname:</Text>
      <TextInput placeholder="Burger"/>

      <Button title="Add User" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 50,
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
