import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LocationPin = () => (
  <Icon name="location-arrow" size={15} color="#22222280" />
);

const Profile = () => (
  <View style={styles.profileContainer}>
    <View style={styles.imageContainer}>
      <Image
        style={{
          height: 180,
          width: 140,
          borderRadius: 5
        }}
        source={{
          uri: "https://api.adorable.io/avatars/285/abott@adorable.png"
        }}
        resizeMethod="resize"
      />
    </View>
    <View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>Joseph Idalo</Text>
        <Text style={styles.infoSubHeader}>Product Designer</Text>
        <View
          style={[
            styles.locationContainer,
            { flexDirection: "row", alignItems: "center" }
          ]}
        >
          <LocationPin />
          <Text style={[styles.locationText, { marginLeft: 5 }]}>
            {"London"}
          </Text>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.statsContainer}>
        <View style={[styles.stats, { marginTop: 7 }]}>
          <Text style={styles.statsNumber}>63</Text>
          <Text style={styles.statsLabel}>projects</Text>
        </View>
        <View style={[styles.stats, { marginTop: 10 }]}>
          <Text style={styles.statsNumber}>41</Text>
          <Text style={styles.statsLabel}>tasks</Text>
        </View>
      </View>
    </View>
  </View>
);

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    padding: 20
  },
  imageContainer: {
    margin: 0,
    marginLeft: 20,
    position: "relative",
    shadowColor: "#ddd",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1,
    flex: 1
  },
  infoContainer: {
    alignItems: "flex-end",
    height: 100,
    paddingRight: 20,
    flex: 0.5
  },
  infoHeader: {
    fontSize: 22,
    fontWeight: "700"
    // letterSpacing: 1.2
  },
  infoSubHeader: {
    margin: 5,
    fontSize: 14
  },
  divider: {
    height: 1,
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: "#dddddd80"
  },
  locationContainer: {
    marginTop: 10
  },
  locationText: {
    fontWeight: "bold",
    fontSize: 14
  },
  statsContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 10
    // borderWidth: 1
  },
  stats: {
    alignItems: "center",
    paddingHorizontal: 20
  },
  statsNumber: {
    fontWeight: "bold",
    fontSize: 18
  },
  statsLabel: {}
});
