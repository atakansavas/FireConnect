import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import firebase from "@firebase/app";
import "@firebase/auth";
import Home from "./Home";
import styles from "../components/styles";
import Header from "../components/Header";
import Login from "./Login";
import Spinner from "../components/Spinner";

interface IProps {
  navigation: NavigationScreenProp<any, any>;
}
interface IState {
  isLoggedIn: boolean;
}
export default class Main extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isLoggedIn: null };
  }

  componentWillMount() {
    // Utility.initFirebase();

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ isLoggedIn: true });
      } else {
        this.setState({ isLoggedIn: false });
      }
    });
  }

  controlUserStatus() {
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
        {this.controlUserStatus()}
      </View>
    );
  }
}
