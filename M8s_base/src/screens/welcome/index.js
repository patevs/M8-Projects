
import React, { Component } from "react";

import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Root, Drawer } from "native-base";

import { Grid, Row } from "react-native-easy-grid";

import { StackActions, NavigationActions, StackNavigator, DrawerNavigator } from "react-navigation";

import styles from "./styles";

import SideBar from "../sidebar/";

import Home from "../home/";
import Footer from "../footer/";
import NHLayout from "../layout";

import Login from "../login";
import Signup from "../signup";

const DrawerNav = DrawerNavigator(
  {
    Home: { screen: Home },
    Footer: { screen: Footer },
    NHLayout: { screen: NHLayout }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    Signup: { screen: Signup },

    DrawerNav: { screen: DrawerNav },
  },
  {
    initialRouteName: "DrawerNav",
    headerMode: "none"
  }
);

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4
    };
  }
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      <Container style={styles.container}>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate("DrawerOpen")}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Welcome</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>
            Header with noLeft prop, eliminates Left component for Android
          </Text>
        </Content>
      </Container>
    );
  }
}

export default Welcome;

/*

*/
