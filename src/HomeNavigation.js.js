import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductList from "./ProductList";
import MainPage from "./MainPage";
import PageItemDetail from "./PageItemDetail";
import EditProfile from "./EditProfile";
const Stack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainPage"
        component={MainPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Welcome to our store" component={ProductList} />
      <Stack.Screen name="PageItemDetail" component={PageItemDetail} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
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
