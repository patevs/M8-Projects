import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Header from "./screens/Header/";
import Header1 from "./screens/Header/1";
import Header2 from "./screens/Header/2";
import Header3 from "./screens/Header/3";
import Header4 from "./screens/Header/4";
import Header5 from "./screens/Header/5";
import Header6 from "./screens/Header/6";
import Header7 from "./screens/Header/7";
import Header8 from "./screens/Header/8";
import HeaderSpan from "./screens/Header/header-span";
import HeaderNoShadow from "./screens/Header/header-no-shadow";
import HeaderTransparent from "./screens/Header/header-transparent";
import HeaderNoLeft from "./screens/Header/header-noLeft";

import BasicFooter from "./screens/footer/basicFooter";
import IconFooter from "./screens/footer/iconFooter";
import IconText from "./screens/footer/iconText";
import BadgeFooter from "./screens/footer/badgeFooter";

import RowNB from "./screens/layout/row";
import ColumnNB from "./screens/layout/column";
import NestedGrid from "./screens/layout/nested";
import CustomRow from "./screens/layout/customRow";
import CustomCol from "./screens/layout/customCol";

import Home from "./screens/home/";
import Footer from "./screens/footer/";
import NHLayout from "./screens/layout/";
import SideBar from "./screens/sidebar";

import Login from "./screens/login/";
import Signup from "./screens/signup/";
//import Main from "./screens/main/";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    Header: { screen: Header },
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

    Drawer: { screen: Drawer },

    Header1: { screen: Header1 },
    Header2: { screen: Header2 },
    Header3: { screen: Header3 },
    Header4: { screen: Header4 },
    Header5: { screen: Header5 },
    Header6: { screen: Header6 },
    Header7: { screen: Header7 },
    Header8: { screen: Header8 },
    HeaderSpan: { screen: HeaderSpan },
    HeaderNoShadow: { screen: HeaderNoShadow },
    HeaderNoLeft: { screen: HeaderNoLeft },
    HeaderTransparent: { screen: HeaderTransparent },

    BasicFooter: { screen: BasicFooter },
    IconFooter: { screen: IconFooter },
    IconText: { screen: IconText },
    BadgeFooter: { screen: BadgeFooter },

    RowNB: { screen: RowNB },
    ColumnNB: { screen: ColumnNB },
    NestedGrid: { screen: NestedGrid },
    CustomRow: { screen: CustomRow },
    CustomCol: { screen: CustomCol }
  },
  {
    initialRouteName: "Home",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
