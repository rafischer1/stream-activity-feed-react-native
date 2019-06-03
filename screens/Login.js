import React, { PureComponent } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Link } from "react-router-native";
// import console = require("console");

const hitSlop = { top: 24, right: 24, bottom: 24, left: 24 };

class Login extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: ""
    };
  }

  _handleChange = name => value => {
    this.setState({
      [name]: value
    });
  };

  _renderLink = props => (
    <TouchableOpacity disabled={!this._canLogin} hitSlop={hitSlop} {...props} />
  );

  loginCallback = () => {
    console.log("clicked the callback");
  };

  render() {
    const { email, name } = this.state;
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.brand}>
          {/* <Image
            style={styles.logo}
            source={
              "https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-11-512.png"
            }
          /> */}
          <Text style={styles.name}>Activity Feed Login</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Name"
          onChangeText={this._handleChange("name")}
          value={name}
        />
        <TextInput
          autoCapitalize="none"
          style={styles.input}
          placeholder="Email"
          onChangeText={this._handleChange("email")}
          value={email}
        />
        <View style={styles.btnWrapper}>
          <Link to={this._to} component={this._renderLink}>
            <Text style={this._labelStyle} onClick={() => this.loginCallback}>
              Activity Feed Example
            </Text>
          </Link>
        </View>
      </SafeAreaView>
    );
  }

  get _to() {
    return {
      pathname: "/feed",
      state: {
        user: this.state
      }
    };
  }

  get _canLogin() {
    const { email, name } = this.state;
    return Boolean(name) && Boolean(email);
  }

  get _labelStyle() {
    return {
      ...styles.btnLabel,
      color: this._canLogin ? "blue" : "#000"
    };
  }
}

export default Login;

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 18,
    color: "rgb(0, 122, 255)",
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 8,
    padding: 4
  },
  btnWrapper: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 32
  },
  brand: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 32
  },
  input: {
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 8,
    borderRadius: 8,
    borderColor: "#f9f9f9",
    borderWidth: 2,
    padding: 16,
    width: 343
  },
  logo: {
    width: 100,
    height: 112
  },
  name: {
    fontSize: 20,
    fontWeight: "800",
    marginTop: 16
  },
  root: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center"
  }
});
