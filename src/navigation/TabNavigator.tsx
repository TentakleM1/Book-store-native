import React from 'react';
import {Tab} from '.';
import {BooksScreen} from 'src/screens/BooksScreen/BooksScreen';
import {FavoriteScreen} from 'src/screens/FavoriteScreen/FavoriteScreen';
import {BookingScreen} from 'src/screens/BookingScreen/BookingScreen';
import { ProfileNavigator } from './ProfileNavigator';

export function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}} >
      <Tab.Screen name="Books" component={BooksScreen} />
      <Tab.Screen name="Profile" component={ProfileNavigator}  />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
    </Tab.Navigator>
  );
}
