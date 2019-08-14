import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ToDoScreen from './ToDoScreen';
const MainNavigator = createStackNavigator({
  HomeScreen: {screen: HomeScreen},
  ToDoScreen: {screen: ToDoScreen},
});
const App = createAppContainer(MainNavigator);
export default App;
