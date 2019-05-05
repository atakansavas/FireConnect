import React, { Component } from "react";
import Navigator from "./components/Navigator";
import Splash from "./src/SplashScreen";

interface IProps {}
interface IState {}
export default class App extends Component<IProps, IState> {
  render() {
    return <Navigator />;
  }
}
