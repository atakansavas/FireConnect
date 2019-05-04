import React from "react";
import { Image, Text, View } from "react-native";
import styles from "../components/styles";

interface IProps {}

export default class Splash extends React.Component<IProps> {
  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>Welcome to</Text>
        <Text style={styles.splashText}>FireConnect</Text>
      </View>
    );
  }
}
