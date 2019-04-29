import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./../src/Home";
import Main from "./../src/Main";

const MainNavigator = createStackNavigator({
  Main: { screen: Main },
  Home: { screen: Home }
});

const App = createAppContainer(MainNavigator);

export default App;

// import React from "react";
// import Home from '../src/Home';
// import Main from '../src/Main';

// // const HomeStack = createStackNavigator({ Main, Home });

// import { Platform } from "react-native";
// import {
//   createBottomTabNavigator,
//   createDrawerNavigator,
//   createStackNavigator,
//   createSwitchNavigator
// } from "react-navigation";

// const Navigator = createStackNavigator({ Home, Main });

// export default Navigator;
