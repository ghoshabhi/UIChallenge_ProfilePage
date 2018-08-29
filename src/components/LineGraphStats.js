import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { LineChart } from "react-native-svg-charts";
import * as shape from "d3-shape";

const LineChartExample = ({ data }) => (
  <LineChart
    style={{
      height: 100,
      width: 100,
      shadowColor: "#ddd",
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
      elevation: 1
    }}
    data={data}
    svg={{ stroke: "rgb(134, 65, 244)", strokeWidth: 2 }}
    contentInset={{ top: 10, bottom: 20 }}
    showGrid={false}
    curve={shape.curveNatural}
    animate={true}
    animationDuration={1000}
  />
);

const LineGraphStats = () => (
  <View style={styles.container}>
    <View style={styles.graphContainer}>
      <Text style={styles.graphNumber}>78%</Text>
      <Text style={styles.graphLabel}>productivity</Text>
      <LineChartExample data={[90, 60, 70, 95, 90, 88, 92, 85, 91, 53]} />
    </View>
    <View style={styles.graphContainer}>
      <Text style={styles.graphNumber}>81%</Text>
      <Text style={styles.graphLabel}>proficiency</Text>
      <LineChartExample data={[90, 90, 70, 95, 85, 91, 53]} />
    </View>
  </View>
);

export default LineGraphStats;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  graphContainer: {
    alignItems: "center"
  },
  graphNumber: {
    color: "#222222",
    fontSize: 16,
    lineHeight: 30,
    fontWeight: "bold"
  },
  graphLabel: {
    fontWeight: "400"
  }
});
