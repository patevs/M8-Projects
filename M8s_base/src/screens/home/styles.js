const React = require("react-native");
const { Dimensions, Platform } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

export default {
  imageContainer: {
    flex: 1,
    width: null,
    height: null
  },
  logoContainer: {
    flex: 1,
    marginTop: (deviceHeight / 8)-42,
    marginBottom: 42
  },
  logo: {
    position: "absolute",
    left: Platform.OS === "android" ? 4 : 5,
    top: Platform.OS === "android" ? 35 : 60,
    width: deviceWidth - 8,
    height: 100
  },
  text: {
    color: "#D8D8D8",
    bottom: 6,
    marginTop: 5
  }
};
