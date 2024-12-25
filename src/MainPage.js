import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProductList from "./ProductList";
import CreateItem from "./CreateItem";
import Profile from "./Profile";

const Tab = createBottomTabNavigator();
const MainPage = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProductList} />
      <Tab.Screen name="Create Item" component={CreateItem} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainPage;
