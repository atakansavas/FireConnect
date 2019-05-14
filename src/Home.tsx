import React, { Component } from "react";
import { Text, View } from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";
import Button from "../components/Button";
import styles from "../components/styles";

export default class Home extends Component {
  userLogout() {
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.homeContainer}>
        <Text style={styles.welcome}>Welcome to Home screen!</Text>
        <Text style={styles.instructions}>Firebase is ready. </Text>
        <View style={styles.LoginSubContainer}>
          <Button onPress={this.userLogout.bind(this)}>Cikis Yap</Button>
        </View>
      </View>
    );
  }
}

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F5FCFF"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   instructions: {
//     textAlign: "center",
//     color: "#333333",
//     marginBottom: 5
//   }
// });
