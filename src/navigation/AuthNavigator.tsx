import React from 'react';
import { LoginInScreen } from 'src/screens/LoginInScreen/LoginInScreen';
import { SignUpScreen } from 'src/screens/SignUpScreen/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackAuth = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <StackAuth.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <StackAuth.Screen name="Login" component={LoginInScreen} />
      <StackAuth.Screen name="Sign" component={SignUpScreen} />
    </StackAuth.Navigator>
  );
}
