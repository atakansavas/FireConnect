import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Navigator from "./components/Navigator";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return <Navigator />;
  }
}
