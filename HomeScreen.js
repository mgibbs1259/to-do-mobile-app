import React from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  };
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
        <TouchableOpacity onPress={() => this.props.navigation.navigate('ToDoScreen')}>
          <View style={styles.button}>
            <Text style={styles.instructions}>
            Press Here!
            </Text>
          </View>
        </TouchableOpacity>
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
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  button: {
    height: 45,
    width: 350,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  instructions: {
    color: '#87CEEB',
    fontFamily: 'System',
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 5,
  },
});
