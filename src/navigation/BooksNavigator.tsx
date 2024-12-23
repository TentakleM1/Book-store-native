import React from 'react';
import {Stack} from '.';
import {TabNavigator} from './TabNavigator';
import {AvatarScreen} from 'src/screens/AvatarScreen/AvatarScreen';
import {BookScreen} from 'src/screens/BookScreen/BookScreen';
import {FilterScreen} from 'src/screens/FilterScreen/FilterScreen';

export function BooksNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Book" component={BookScreen} />
      <Stack.Screen name="Avatar" component={AvatarScreen} />
      <Stack.Screen name="Filter" component={FilterScreen} />
    </Stack.Navigator>
  );
}
