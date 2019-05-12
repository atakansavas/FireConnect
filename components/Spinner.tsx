import React, { Component } from "react";
import { View, ActivityIndicator } from "react-native";
import styles from "./styles";

interface IProps {}

export default class Spinner extends Component<IProps> {
  render() {
    return (
      <View style={styles.SpinnerStyle}>
        <ActivityIndicator {...this.props} />
      </View>
    );
  }
}
