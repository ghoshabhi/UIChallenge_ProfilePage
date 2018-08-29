import React from "react";
import { createStackNavigator } from "react-navigation";

import Home from "./screens/Home";
import Details from "./screens/Details";

const RootStack = createStackNavigator(
  {
    Home: Home,
    Details: Details
  },
  {
    initialRouteName: "Home",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#5078F2",
        borderBottomWidth: 0
      },
      headerMode: "none",
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

export default () => <RootStack />;
