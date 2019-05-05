import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import styles from "./styles";

export interface Props {
  onPress: any;
}

export default class Button extends Component<Props> {
  render() {
    return (
      <TouchableOpacity {...this.props} style={styles.ButtonStyle}>
        <Text style={styles.ButtonText}>{this.props.children}</Text>
      </TouchableOpacity>
    );
    // return <View style={styles.containerStyle} />;
  }
}
