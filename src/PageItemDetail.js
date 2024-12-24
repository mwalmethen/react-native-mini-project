import { Button, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const PageItemDetail = ({ route }) => {
  const { item } = route.params;
  const { price, name, image } = item;

  return (
    <View>
      <Text> Name: {name}</Text>
      <Text> Price: {price}</Text>
      <Image
        source={image}
        style={{
          width: 300,
          height: 300,
          borderRadius: 10,
          marginTop: 50,
          marginLeft: 30,
        }}
      />
    </View>
  );
};

export default PageItemDetail;
