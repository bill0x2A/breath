import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import Navbar from './components/Navbar/Navbar';

const { useState } = React;

export default function App() {
  let [counter, setCounter] = useState(0)
  return (
    <React.Fragment>
    <View style={styles.container}>
      <Navbar></Navbar>
      <Text>Counter App</Text>
      <Text>{counter}</Text>
      <Button
        title="Increment Counter"
        onPress={() => setCounter(counter + 1)}
        style={styles.button}
      />
      <ActivityIndicator size="small" color="#0000ff" />
      <StatusBar style="auto" />
    </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop : "100px",
  }
});
