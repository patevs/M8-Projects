import React, { Component } from "react";
import { StyleProvider } from "native-base";
import { StackActions, NavigationActions, StackNavigator, DrawerNavigator } from "react-navigation";

//import App from "../App";
import Home from "../screens/home/";
import Login from "../screens/login/";
import Signup from "../screens/signup/";
import Welcome from "../screens/welcome/";

import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";

/*
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Profile' })],
});
//this.props.navigation.dispatch(resetAction);
*/

const WelcomeNavigator = StackNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    Signup: { screen: Signup },
    Welcome: { screen: Welcome }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(variables)}>
        <WelcomeNavigator />
      </StyleProvider>
    );
  }
}
