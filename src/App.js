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
    initialRouteName: "Home"
  }
);

export default () => <RootStack />;
