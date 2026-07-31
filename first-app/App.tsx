import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const nameSuggestions = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Emma',
  'Fiona',
  'George',
  'Henry',
  'Isla',
  'Jack',
];

const surnameSuggestions = [
  'Smith',
  'Jones',
  'Brown',
  'Davis',
  'Miller',
  'Wilson',
  'Taylor',
  'Anderson',
  'Thomas',
  'Jackson',
];

function HomeScreen({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nameOptions, setNameOptions] = useState<string[]>([]);
  const [surnameOptions, setSurnameOptions] = useState<string[]>([]);

  const onNameChange = (text: string) => {
    setName(text);
    const filtered = nameSuggestions.filter(option =>
      option.toLowerCase().startsWith(text.toLowerCase()),
    );
    setNameOptions(text.length > 0 ? filtered : []);
  };

  const onSurnameChange = (text: string) => {
    setSurname(text);
    const filtered = surnameSuggestions.filter(option =>
      option.toLowerCase().startsWith(text.toLowerCase()),
    );
    setSurnameOptions(text.length > 0 ? filtered : []);
  };

  const clearSuggestions = () => {
    setNameOptions([]);
    setSurnameOptions([]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Image source={require('./assets/phone.png')} style={styles.image} />
      <Text style={styles.welcomeTxt}>Welcome to my app</Text>
      <Text style={styles.bodyText}>Use the form below to enter your name and surname.</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.boldText}>Enter Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Bob"
          value={name}
          onChangeText={onNameChange}
          autoCapitalize="words"
          autoComplete="name"
          textContentType="name"
        />
        {nameOptions.length > 0 && (
          <View style={styles.suggestionsBox}>
            {nameOptions.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setName(option);
                  setNameOptions([]);
                }}
                style={styles.suggestionItem}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.divider} />

      <View style={styles.inputGroup}>
        <Text style={styles.boldText}>Enter Surname</Text>
        <TextInput
          style={styles.input}
          placeholder="Burger"
          value={surname}
          onChangeText={onSurnameChange}
          autoCapitalize="words"
          autoComplete="name"
          textContentType="familyName"
        />
        {surnameOptions.length > 0 && (
          <View style={styles.suggestionsBox}>
            {surnameOptions.map(option => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setSurname(option);
                  setSurnameOptions([]);
                }}
                style={styles.suggestionItem}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Add User"
          onPress={() => {
            console.log(`Name: ${name}, Surname: ${surname}`);
            clearSuggestions();
            navigation.navigate('Summary', { name, surname });
          }}
        />
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

function SummaryScreen({ route }: { route: any }) {
  const { name, surname } = route.params ?? { name: '', surname: '' };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeTxt}>Profile Summary</Text>
      <Text style={styles.bodyText}>Name: {name || 'Not entered yet'}</Text>
      <Text style={styles.bodyText}>Surname: {surname || 'Not entered yet'}</Text>
      <Text style={styles.noteText}>Press Back to update your details.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }} />
        <Stack.Screen name="Summary" component={SummaryScreen} options={{ title: 'User Summary' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9',
    minHeight: '100%',
  },
  welcomeTxt: {
    paddingTop: 10,
    color: '#1a73e8',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  bodyText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  noteText: {
    fontSize: 14,
    color: '#666',
    marginTop: 16,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: '700',
    marginBottom: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    width: '100%',
    marginVertical: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 44,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
  },
  suggestionsBox: {
    marginTop: 8,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  suggestionItem: {
    padding: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 20,
  },
});
