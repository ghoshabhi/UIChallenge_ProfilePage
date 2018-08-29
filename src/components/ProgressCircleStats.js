import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ProgressCircle } from "react-native-svg-charts";
import styled from "styled-components/native";

import TextGroup from "./TextGroup";

export const Divider = styled.View`
  height: 100%;
  background-color: #dddddd90;
  border-right-width: 1px;
`;

const StatGroup = ({ label, value }) => (
  <View style={[styles.stats, { minWidth: "100%", padding: 10 }]}>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

const ProgressCircleStats = () => (
  <View style={styles.container}>
    <View style={{ flex: 1, width: "60%", marginLeft: "10%" }}>
      <ProgressCircle
        style={{ height: 120, width: 120 }}
        progress={0.7}
        progressColor={"#005abc"}
        strokeWidth={12}
      >
        <TextGroup />
      </ProgressCircle>
    </View>
    <View style={styles.stats}>
      <StatGroup label="likes" value={221} />
      {/* <Divider /> */}
      <StatGroup label="comments" value={181} />
    </View>
  </View>
);

export default ProgressCircleStats;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 20
    // borderWidth: 1
  },
  stats: {
    width: "40%",
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  statValue: {
    fontSize: 22,
    fontWeight: "900",
    color: "#4a4a4a"
  },
  statLabel: {
    fontSize: 16,
    marginTop: 5,
    color: "#22222290"
  }
});
