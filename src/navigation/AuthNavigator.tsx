import React from 'react';
import {Stack} from '.';
import { LoginInScreen } from 'src/screens/LoginInScreen/LoginInScreen';
import { SignUpScreen } from 'src/screens/SignUpScreen/SignUpScreen';

export function AuthNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginInScreen} />
      <Stack.Screen name="Sign" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
