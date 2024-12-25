import { StyleSheet, Text, View, Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Profile = () => {
  const navigation = useNavigation();
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

      <View style={styles.button}>
        <Button
          title="Edit Profile"
          onPress={() => {
            navigation.navigate("EditProfile", {});
          }}
        />
      </View>
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
    bottom: 650,
  },
  button: {
    position: "absolute",
    right: 55,
    bottom: 570,
    width: 130,
    height: 50,
  },
});

export default Profile;
