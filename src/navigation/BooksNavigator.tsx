import React from 'react';
import {Stack} from '.';
import {TabNavigator} from './TabNavigator';
import { LoginInScreen } from 'src/screens/LoginInScreen/LoginInScreen';

export function BooksNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Book" component={LoginInScreen} />
    </Stack.Navigator>
  );
}
