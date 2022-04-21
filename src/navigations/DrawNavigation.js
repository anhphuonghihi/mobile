import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeNavigation from "./HomeNavigation"
const Drawer = createDrawerNavigator();
import {HOME_NAVIGATOR} from "../constants/routeNames"
const DrawNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={HOME_NAVIGATOR} component={HomeNavigation} />
    </Drawer.Navigator>
  );
};

export default DrawNavigation;
