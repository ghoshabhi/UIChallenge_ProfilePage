/**
 * @flow
 */

import React, { Component } from "react";
import { Image, Text, View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

import TabView from "../components/TabView";

const Container = styled.View`
  flex: 1;
  margin: 0;
`;

const Header = styled.View`
  min-height: 200;
  background-color: #5078f2;
`;

const HeaderContainer = styled.View`
  margin: 10px;
  padding-horizontal: 20px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const HeaderInfoContainer = styled.View`
  margin: 20px;
`;

const RoundAvatar = styled.Image`
  height: 80;
  width: 80;
  border-radius: 40;
`;

const H1 = styled.Text`
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 10px;
  color: white;
`;

const H4 = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: white;
  opacity: 0.9;
`;

const Paragraph = styled.Text`
  font-size: 14px;
  line-height: 22px;
  color: white;
  opacity: 0.9;
`;

const img = require("../assets/pp.png");

export default class DetailsScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // title: navigation.getParam("name", "N/A")
    title: "Profile"
  });

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header>
          <HeaderContainer>
            <RoundAvatar source={img} resizeMethod="resize" />
            <HeaderInfoContainer>
              <H1>{navigation.getParam("name", "N/A")}</H1>
              <H4>{navigation.getParam("title", "N/A")}</H4>
            </HeaderInfoContainer>
          </HeaderContainer>
          <HeaderInfoContainer>
            <Paragraph>{navigation.getParam("description", "N/A")}</Paragraph>
          </HeaderInfoContainer>
        </Header>
        <TabView />
      </Container>
    );
  }
}
