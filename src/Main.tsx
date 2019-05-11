import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import Home from "./Home";
import styles from "../components/styles";
import Header from "../components/Header";
import Login from "./Login";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}
interface IState {
  isLoggedIn: boolean;
}
export default class Main extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isLoggedIn: false };
  }

  componentWillMount() {
    // Utility.initFirebase();
  }

  // controlUserStatus() {
  //   if (this.state.isLoggedIn) {
  //     // Kullanici girisi yapilmistir
  //     return <Home />;
  //   } else {
  //     //Ilk acilis
  //     return <Login />;
  //   }
  // }

  goToHome() {
    this.props.navigation.navigate("Home", { screen: Home });
  }

  Greeting() {
    if (this.state.isLoggedIn) {
      return <Home />;
    }
    return <Login />;
  }

  render() {
    let result = null;
    if (!this.state.isLoggedIn) result = Home;
    else result = Login;
    return (
      <View style={styles.mainContainer}>
        <Header headerText="FireConnect Title" />
        {this.Greeting()}
      </View>
    );
  }
}
