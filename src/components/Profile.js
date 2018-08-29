import React from "react";
import { View, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LocationPin = () => (
  <Icon name="location-arrow" size={15} color="#22222280" />
);

const Profile = ({ navigation, user }) => (
  <View style={styles.profileContainer}>
    <View style={styles.imageContainer}>
      <Image
        style={{
          height: 180,
          width: 140,
          borderRadius: 5
        }}
        source={user.profilePicture}
        resizeMethod="resize"
      />
    </View>
    <View>
      <View style={styles.infoContainer}>
        <TouchableOpacity onPress={() => navigation.push("Details", user)}>
          <Text style={styles.infoHeader}>{user.name}</Text>
        </TouchableOpacity>
        <Text style={styles.infoSubHeader}>{user.title}</Text>
        <View
          style={[
            styles.locationContainer,
            { flexDirection: "row", alignItems: "center" }
          ]}
        >
          <LocationPin />
          <Text style={[styles.locationText, { marginLeft: 5 }]}>
            {user.location}
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
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 1
    // flex: 1
  },
  infoContainer: {
    alignItems: "flex-end",
    height: 100,
    paddingRight: 10,
    flex: 0.5
  },
  infoHeader: {
    fontSize: 22,
    fontWeight: "700"
  },
  infoSubHeader: {
    marginTop: 5,
    fontSize: 14
  },
  divider: {
    height: 1,
    marginTop: 20,
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
