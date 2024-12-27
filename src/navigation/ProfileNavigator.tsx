import React from 'react';
import {ProfileScreen} from 'src/screens/ProfileScreen/ProfileScreen';
import {AvatarScreen} from 'src/screens/AvatarScreen/AvatarScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const StackProfile = createNativeStackNavigator();

export function ProfileNavigator() {
  return (
    <StackProfile.Navigator screenOptions={{headerShown: false}}>
      <StackProfile.Screen name="Settings" component={ProfileScreen} />
      <StackProfile.Screen name="Avatar" component={AvatarScreen} />
    </StackProfile.Navigator>
  );
}
