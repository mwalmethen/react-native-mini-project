import { StyleSheet, Text, View, Button, Image } from "react-native";
import React from "react";

const ProductItem = ({ item, handleItemPressed }) => {
  const { name, price, image, product } = item;

  return (
    <View>
      <Text>Product: {product}</Text>
      <View>
        <Text>Name: {name}</Text>
        <Text>Price: {price}</Text>
        <Image
          source={image}
          style={{
            width: 200,
            height: 200,
            borderRadius: 10,
            marginBottom: 50,
            marginTop: 50,
            marginLeft: 100,
          }}
        />
      </View>
      <Button title="See Item Details" onPress={handleItemPressed} />
    </View>
  );
};

export default ProductItem;
