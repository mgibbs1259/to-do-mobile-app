import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='#87CEEB'
        />
        <Text style={styles.greeting}>
          Get Shit Done!
        </Text>
        <Text style={styles.instructions}>
          To get started, tap the screen.
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#87CEEB',
  },
  greeting: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 5,
  },
});
