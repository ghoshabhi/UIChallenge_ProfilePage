/**
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

import Profile from "../components/Profile";
import LineGraphStats from "../components/LineGraphStats";
import ProgressCircleStats from "../components/ProgressCircleStats";

export const Divider = styled.View`
  height: 1;
  background-color: #dddddd90;
`;

type Props = {};
export default class HomeScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Profile />
        <View style={styles.introContainer}>
          <Text style={styles.introText}>
            Product Designer of Norde Team, based in London with great love for
            Designing!
          </Text>
        </View>
        <Divider />
        <LineGraphStats />
        <Divider />
        <ProgressCircleStats />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "#fff"
  },
  introContainer: {
    padding: 20,
    paddingBottom: 0,
    paddingTop: 10,
    minHeight: 100,
    marginLeft: 20
  },
  introText: {
    color: "#22222280",
    fontSize: 16,
    textAlign: "justify",
    lineHeight: 30,
    margin: 10
  }
});
