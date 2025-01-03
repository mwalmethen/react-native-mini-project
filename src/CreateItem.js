import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import React, { useState } from "react";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  return (
    <View style={styles.container}>
      <Text>Name: </Text>
      <TextInput
        style={styles.inputField}
        value={name}
        onChangeText={(text) => setName(text)} // Handles text change
        placeholder="Enter item name"
      />
      <Text>Price: </Text>
      <TextInput
        style={styles.inputField}
        value={price}
        onChangeText={(text) => setPrice(text)} // Handles text change
        placeholder="Enter item price"
      />
      <Text>Description: </Text>
      <TextInput
        style={styles.inputField}
        value={description}
        onChangeText={(text) => setDescription(text)} // Handles text change
        placeholder="Enter item description"
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Create Item"
          onPress={() => console.log({ name, price, description })}
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

export default CreateItem;
