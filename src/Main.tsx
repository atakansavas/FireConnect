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
  /**
   *
   */
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

  render() {
    let result = null;
    if (!this.state.isLoggedIn) result = Home;
    else result = Login;
    return (
      <View style={styles.mainContainer}>
        <Header headerText="FireConnect Title" />
        {result}
        {/* {this.state.isLoggedIn ? <Home /> : <Login />} */}
        {/* {this.controlUserStatus()} */}
        {/* {(() => {
          if (!this.state.isLoggedIn) {
            <Home />;
          } else {
            <Login />;
          }
        })()} */}
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, click above</Text>
        <Button title="Home Page" onPress={() => this.goToHome()} /> */}
      </View>
    );
  }
}
