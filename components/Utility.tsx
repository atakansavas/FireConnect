import firebase from "firebase";
import { Alert } from "react-native";

export default class Utility {
  static initFirebase() {
    firebase.initializeApp({
      apiKey: "AIzaSyDhCt1hM6CLt3Fsklicq7yqi8IZItnCROE",
      authDomain: "reactnative-auth-test-3480d.firebaseapp.com",
      databaseURL: "https://reactnative-auth-test-3480d.firebaseio.com",
      projectId: "reactnative-auth-test-3480d",
      storageBucket: "reactnative-auth-test-3480d.appspot.com",
      messagingSenderId: "146226404361"
    });
  }

  static showAlert(title: string = "FirebaseApp", description: string) {
    Alert.alert(
      title,
      description,
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );
  }
}
