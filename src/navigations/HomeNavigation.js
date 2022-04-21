import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  ContactListScreen from '../screens/ContactListScreen'
import  ContactDetailsScreen from '../screens/ContactDetailsScreen'
import  CreateContactScreen from '../screens/CreateContactScreen'
import  SettingsScreen from '../screens/SettingsScreen'
import  LogoutScreen from '../screens/LogoutScreen'
import {CONTACT_LIST,CONTACT_DETAIL,CREATE_CONTAC,SETTINGS,LOGOUT} from '../constants/routeNames'
const HomeStack = createNativeStackNavigator();
const HomeNavigation = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown:false}}>
      <HomeStack.Screen name={CONTACT_LIST} component={ContactListScreen} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetailsScreen} />
      <HomeStack.Screen name={CREATE_CONTAC} component={CreateContactScreen} />
      <HomeStack.Screen name={SETTINGS} component={SettingsScreen} />
      <HomeStack.Screen name={LOGOUT} component={LogoutScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigation;
