import React from "react";
import { Text, View } from "react-native";
import styles from "../components/styles";
import Utility from "../components/Utility";
import { NavigationScreenProp } from "react-navigation";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}

export default class Splash extends React.Component<IProps> {
  componentWillMount() {
    Utility.initFirebase();
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 15000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate("Main");
    }
  }

  render() {
    return (
      <View style={styles.splashContainer}>
        <Text style={styles.splashText}>SENI</Text>
        <Text style={styles.splashText}>SEVIYORUM</Text>
      </View>
    );
  }
}
