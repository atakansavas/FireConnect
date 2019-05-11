import React, { Component } from "react";
import { View, TextInput } from "react-native";
import styles from "../components/styles";
import Utility from "../components/Utility";
import Button from "../components/Button";

interface IProps {}

interface IState {
  mail: string;
  password: string;
}

export default class Login extends Component<IProps, IState> {
  /**
   *
   */
  constructor(props: IProps) {
    super(props);

    this.state = { mail: "", password: "" };
  }
  handleClick(mail: string, password: string) {
    // Utility.showAlert("test baslik", "Description");
    Utility.ShowAlert(mail, password);
  }

  render() {
    return (
      <View style={styles.LoginMainContainer}>
        <View style={styles.LoginSubContainer}>
          <TextInput
            placeholder="e-mail"
            style={styles.GeneralInput}
            value={this.state.mail}
            onChangeText={p => this.setState({ mail: p })}
          />
        </View>
        <View style={styles.LoginSubContainer}>
          <TextInput
            placeholder="password"
            style={styles.GeneralInput}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.LoginSubContainer}>
          <Button
            onPress={() =>
              this.handleClick(this.state.mail, this.state.password)
            }
          >
            Giris Yap
          </Button>
        </View>
      </View>
    );
  }
}
