import React, { Component } from "react";
import Navigator from "./components/Navigator";
import Splash from "./src/SplashScreen";

interface IProps {}
interface IState {
  isLoading: boolean;
}
export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = { isLoading: true };
  }

  // async componentDidMount() {
  //   // Preload data from an external API
  //   // Preload data using AsyncStorage
  //   const data = await this.performTimeConsumingTask();

  //   if (data !== null) {
  //     this.setState({ isLoading: false });
  //   }
  // }

  // performTimeConsumingTask = async () => {
  //   return new Promise(resolve =>
  //     setTimeout(() => {
  //       resolve("result");
  //     }, 3000)
  //   );
  // };

  render() {
    // if (this.state.isLoading) {
    //   return <Splash />;
    // }

    return <Navigator />;
  }
}
