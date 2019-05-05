import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

interface Props {
  headerText: string;
}

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{this.props.headerText}</Text>
      </View>
    );
  }
}
