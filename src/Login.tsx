import React, { Component } from "react";
import { View, TextInput } from "react-native";
import firebase from "@firebase/app";
import "@firebase/auth";
import styles from "../components/styles";
import Utility from "../components/Utility";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

interface IProps {}

interface IState {
  mail: string;
  password: string;
  isLoading: boolean;
}

export default class Login extends Component<IProps, IState> {
  /**
   *
   */
  constructor(props: IProps) {
    super(props);

    this.state = { mail: "", password: "", isLoading: false };
  }

  handleClick() {
    // Utility.showAlert("test baslik", "Description");
    const { mail, password } = this.state;
    this.setState({ isLoading: true });

    if (mail === "" || password === "") {
      Utility.ShowAlert("Hata!", "Lutfen alanlari doldurunuz.");
      this.setState({ isLoading: false });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(mail, password)
        .then(this.loginSuccess.bind(this))
        .catch(() => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(mail, password)
            .then(this.loginSuccess.bind(this))
            .catch(this.loginFail.bind(this));
        });
    }
  }

  loginSuccess() {
    Utility.ShowAlert("Basarili!", "Sisteme basarili sekilde giris yaptiniz.");
    this.setState({ isLoading: false });
  }

  loginFail() {
    Utility.ShowAlert(
      "Hata!",
      "Ayni kullanici bilgileri ile sistemde kullanici bulunuyor."
    );
    this.setState({ isLoading: false });
  }

  renderButton() {
    if (!this.state.isLoading) {
      return <Button onPress={this.handleClick.bind(this)}>Giris Yap</Button>;
    }

    return <Spinner />;
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
            secureTextEntry
            placeholder="password"
            style={styles.GeneralInput}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.LoginSubContainer}>{this.renderButton()}</View>
      </View>
    );
  }
}
