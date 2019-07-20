import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('./blue_background.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <View style={styles.container}>
          <Text style={styles.titleText}> Get Shit Done! </Text>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    color: 'white',
    fontFamily: 'System',
    fontSize: 36,
    fontWeight: 'bold',
  },
});
