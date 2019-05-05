import React, { Component } from "react";
import { NavigatorIOS, StyleSheet, Text, View, Button } from "react-native";
import { StackNavigator, NavigationScreenProp } from "react-navigation";
import Home from "./Home";
import styles from "../components/styles";

interface Props {
  navigation: NavigationScreenProp<any, any>;
}
export default class Main extends Component<Props> {
  componentWillMount() {
    // Utility.initFirebase();
  }

  static navigationOptions = {
    title: "Main page component"
  };

  goToHome() {
    this.props.navigation.navigate("Home", { screen: Home });
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, click above</Text>
        <Button title="Home Page" onPress={() => this.goToHome()} />
      </View>
    );
  }
}
