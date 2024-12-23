import React from 'react';
import {Tab} from '.';
import {BooksScreen} from 'src/screens/BooksScreen/BooksScreen';
import {FavoriteScreen} from 'src/screens/FavoriteScreen/FavoriteScreen';
import {BookingScreen} from 'src/screens/BookingScreen/BookingScreen';
import {ProfileNavigator} from './ProfileNavigator';
import {Image} from 'react-native';
import images from 'src/assets/imgs/images';

const tabBarIcon = (img: number) => {
  return <Image source={img} />;
};

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Books"
        component={BooksScreen}
        options={{
          tabBarIcon: () => tabBarIcon(images.homeTab),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: () => tabBarIcon(images.profileTab),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: () => {
            return tabBarIcon(images.unionTab);
          },
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarIcon: () => tabBarIcon(images.cartTab),
        }}
      />
    </Tab.Navigator>
  );
}
