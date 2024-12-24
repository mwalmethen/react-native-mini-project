import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./ProductList";
import ProductItem from "./ProductItem";
import PageItemDetail from "./PageItemDetail";
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <ScrollView>
      <Stack.Navigator>
        <Stack.Screen name="Welcome to our store" component={ProductList} />
        <Stack.Screen name="PageItemDetail" component={PageItemDetail} />
      </Stack.Navigator>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeNavigation;
