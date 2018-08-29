/**
 * @flow
 */

import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Button,
  Text,
  View
} from "react-native";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

import ProfileTop from "../components/Profile";
import LineGraphStats from "../components/LineGraphStats";
import ProgressCircleStats from "../components/ProgressCircleStats";

export const Divider = styled.View`
  height: 1;
  background-color: #dddddd90;
`;

const user = {
  name: "Abhishek Ghosh",
  title: "Software Engineer",
  description:
    "Passionate Full Stack Engineer focussing on cutting edge frontend and scalable backend technologies!",
  location: "Hayward, CA",
  profilePicture: require("../assets/pp.png")
};

type Props = {};
export default class HomeScreen extends Component<Props> {
  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerRight: (
      <TouchableOpacity
        onPress={() => navigation.push("Details", user)}
        style={{ marginRight: 20 }}
      >
        <Icon name="user" size={20} color="#fff" />
      </TouchableOpacity>
    )
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <ProfileTop navigation={this.props.navigation} user={user} />
        <View style={styles.introContainer}>
          <Text style={styles.introText}>{user.description}</Text>
        </View>
        <Divider />
        <LineGraphStats />
        <Divider />
        <ProgressCircleStats />
      </ScrollView>
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
    // textAlign: "justify",
    lineHeight: 30,
    margin: 10
  }
});
