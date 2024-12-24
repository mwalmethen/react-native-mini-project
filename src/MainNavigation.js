import { Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PageItemDetail from "./PageItemDetail";
import ProductList from "./ProductList";
import HomeNavigation from "./HomeNavigation.js";
import CreateItem from "./CreateItem";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();
const MainNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeNavigation} />
      <Tab.Screen name="Create Item" component={CreateItem} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
