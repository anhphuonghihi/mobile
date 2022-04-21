
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  LoginScreen from '../screens/LoginScreen'
import  RegisterScreen from '../screens/RegisterScreen'
import {LOGIN,REGISTER} from "../constants/routeNames"
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;

