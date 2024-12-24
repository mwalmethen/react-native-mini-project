import { NavigationContainer } from "@react-navigation/native";
import HomeNavigation from "./src/HomeNavigation.js";
import MainNavigation from "./src/MainNavigation.js";

export default function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}
