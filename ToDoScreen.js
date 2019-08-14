import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet } from 'react-native';
export default class ToDoScreen extends React.Component {
  static navigationOptions = {
    title: 'Shit to Get Done!'
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle='light-content'
          backgroundColor='#87CEEB'
        />
        <Text style={styles.greeting}>
          ToDoScreen
        </Text>
        <Text style={styles.instructions}>
          ToDoScreen
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
