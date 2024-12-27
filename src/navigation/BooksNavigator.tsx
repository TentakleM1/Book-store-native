import React from 'react';
import {TabNavigator} from './TabNavigator';
import {AvatarScreen} from 'src/screens/AvatarScreen/AvatarScreen';
import {BookScreen} from 'src/screens/BookScreen/BookScreen';
import {FilterScreen} from 'src/screens/FilterScreen/FilterScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackBooks = createNativeStackNavigator();

export function BooksNavigator() {
  return (
    <StackBooks.Navigator screenOptions={{headerShown: false}}>
      <StackBooks.Screen name="Home" component={TabNavigator} />
      <StackBooks.Screen name="Book" component={BookScreen} />
      <StackBooks.Screen name="Avatar" component={AvatarScreen} />
      <StackBooks.Screen name="Filter" component={FilterScreen} />
    </StackBooks.Navigator>
  );
}
