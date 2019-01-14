import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-main.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={{ marginBottom: 48 }}>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>Login</Text>
            </Button>
          </View>
          <View style={{ marginBottom: 248 }}>
            <Button
              style={{ backgroundColor: "#62B1F6", alignSelf: "center", height: 56 }}
              onPress={() => this.props.navigation.navigate("Signup")}
            >
              <Text
                style={{ fontSize: 18, fontWeight: "bold" }}>Signup</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;

/*
<View
  style={{
    alignItems: "center",
    marginBottom: 50,
    backgroundColor: "transparent"
  }}
>
  <H3 style={styles.text}>App to showcase</H3>
  <View style={{ marginTop: 8 }} />
  <H3 style={styles.text}>NativeBase components</H3>
  <View style={{ marginTop: 8 }} />
</View>

*/
