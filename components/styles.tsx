import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  homeContainer: {
    flex: 1,
    textAlign: "center",
    alignItems: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  splashText: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold"
  },
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange"
  },
  headerView: {
    backgroundColor: "#f8f8f8",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.2
  },
  headerText: {
    fontSize: 40
  },
  LoginMainContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  LoginSubContainer: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  },
  GeneralInput: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  ButtonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  ButtonText: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10
  },
  SpinnerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default styles;
