import { StyleSheet, Text, View, Button, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./pics/MyImage.jpg")}
        style={{
          width: 120,
          height: 120,
          borderRadius: 300,
          marginLeft: 30,
          marginTop: 20,
        }}
      />
      <Text style={styles.name}>Mohammed Almethen</Text>
      <Text style={styles.details}>Contact Details: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the full screen
    flexDirection: "column", // Arrange items vertically
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    position: "absolute",
    right: 40,
    bottom: 670,
  },
  details: {
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
    color: "gray",
    position: "absolute",
    right: 64,
    bottom: 640,
  },
});

export default Profile;
