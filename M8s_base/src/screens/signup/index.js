import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text } from "native-base";
//import { Container, Header, Title, Text, Button, Icon, Left, Right, Body} from "native-base";
import { Grid, Row, Col } from "react-native-easy-grid";

import { StackActions, NavigationActions } from 'react-navigation';

import styles from "./styles";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-main.png");

/*
const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Welcome'})
  ]
});
*/

class Signup extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View style={ styles.btn0 }>
            <Button
              style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("Welcome")}
            >
              <Text>Continue</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Signup;
