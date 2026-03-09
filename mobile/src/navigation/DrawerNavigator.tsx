import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import SolutionsScreen from '../screens/SolutionsScreen';
import WeatherScreen from '../screens/WeatherScreen';
import BlogScreen from '../screens/BlogScreen';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {

  return (

    <Drawer.Navigator
      screenOptions={{
        headerStyle:{backgroundColor:'#6eac71'},
        headerTintColor:'#fff',
        drawerActiveTintColor:'#2e7d32',
        headerShown: false
      }}
    >

      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Solutions" component={SolutionsScreen} />
      <Drawer.Screen name="Weather Dashboard" component={WeatherScreen} />
      <Drawer.Screen name="Blog" component={BlogScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />

    </Drawer.Navigator>

  );

}