import React, { Component } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { NativeRouter as Router, Route, Switch } from "react-router-native";

import Feed from "./screens/Feed";
import Login from "./screens/Login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "Artman",
      token:
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoidXNlci1vbmUifQ.LjTWUNiUbwrIF60zkeAtayT9pLfbO - GBBT0oAVoUFvI"
    };
  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled style={styles.root}>
        <Router>
          <Switch>
            <Route
              exact
              path="/feed"
              render={props => <Feed {...props} token={this.state.token} />}
            />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#D1F2EB"
  }
});
