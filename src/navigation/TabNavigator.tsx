import React from 'react';
import {Tab} from '.';
import {BooksScreen} from 'src/screens/BooksScreen/BooksScreen';
import {FavoriteScreen} from 'src/screens/FavoriteScreen/FavoriteScreen';
import {BookingScreen} from 'src/screens/BookingScreen/BookingScreen';
import {ProfileScreen} from 'src/screens/ProfileScreen/ProfileScreen';
import CustomTabBar from 'src/components/CustomTabBar/CustomTabBar';

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={props => CustomTabBar(props)}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="Books" component={BooksScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
    </Tab.Navigator>
  );
}
