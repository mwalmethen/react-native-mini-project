import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <View style={styles.container}>
      <Text>First Name: </Text>
      <TextInput
        style={styles.inputField}
        value={name}
        onChangeText={(text) => setName(text)} // Handles text change
      />
      <Text>Last Name: </Text>
      <TextInput
        style={styles.inputField}
        value={price}
        onChangeText={(text) => setPrice(text)} // Handles text change
      />
      <Text>Phone Number: </Text>
      <TextInput
        style={styles.inputField}
        value={phone}
        onChangeText={(text) => setPhone(text)} // Handles text change
      />
      <Text>Email: </Text>
      <TextInput
        style={styles.inputField}
        value={email}
        onChangeText={(text) => setEmail(text)} // Handles text change
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Edit Profile"
          onPress={() => console.log({ name, price, phone, email })}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputField: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default EditProfile;
