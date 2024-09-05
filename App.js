import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculate = () => {
    const ageInt = parseInt(age);
    if (isNaN(ageInt) || ageInt <= 0) {
      setLowerLimit('Invalid age');
      setUpperLimit('');
      return;
    }
    
    const lower = (220 - ageInt) * 0.65;
    const upper = (220 - ageInt) * 0.85;
    
    setLowerLimit(lower.toFixed(2));
    setUpperLimit(upper.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text>Enter your age to calculate heart rate limits:</Text>
      
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Enter age"
        value={age}
        onChangeText={setAge}
      />

      <Button title="Calculate" onPress={calculate} />

      {lowerLimit !== null && (
        <>
          <Text>Lower Heart Rate Limit: {lowerLimit}</Text>
          <Text>Upper Heart Rate Limit: {upperLimit}</Text>
        </>
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '20%',
  },
});
