/**
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import styled from "styled-components/native";

const RoundAvatar = styled.Image`
  height: 80;
  width: 80;
  border-radius: 40;
`;

const img = require("../assets/pp.png");

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam("name", "Abhishek Ghosh")
    // header: null
  });

  render() {
    return (
      <View style={{ flex: 1, margin: 0 }}>
        <View style={{ height: 200, backgroundColor: "#5078F2" }}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderRadius: 40
            }}
            source={img}
            resizeMethod="resize"
          />
        </View>
      </View>
    );
  }
}
