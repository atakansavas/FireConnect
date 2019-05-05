import firebase from "firebase";
import { Alert } from "react-native";

export default class Utility {
  static initFirebase() {

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
