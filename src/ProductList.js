import { Button, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "./ProductItem";

const ProductList = () => {
  const navigation = useNavigation();
  const items = [
    {
      product: "Mug",
      name: " Hello Mug",
      price: "$10",
      image: require("./pics/mug.webp"),
    },
    {
      product: "Shirt",
      name: "Kuwait T Shirt",
      price: "$20",
      image: require("./pics/kuwait-shirt.jpeg"),
    },
    {
      product: "Hat",
      name: "AMG Hat",
      price: "$15",
      image: require("./pics/Amg-hat.webp"),
    },
  ];

  const itemList = items.map((item) => (
    <ProductItem
      key={item.name}
      item={item}
      handleItemPressed={() => {
        navigation.navigate("PageItemDetail", { item });
      }}
    />
  ));
  return <ScrollView>{itemList}</ScrollView>;
};

export default ProductList;
