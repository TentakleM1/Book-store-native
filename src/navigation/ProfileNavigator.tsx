import React from 'react';
import {Stack} from '.';
import {ProfileScreen} from 'src/screens/ProfileScreen/ProfileScreen';
import {AvatarScreen} from 'src/screens/AvatarScreen/AvatarScreen';

export function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Avatar" component={AvatarScreen} />
    </Stack.Navigator>
  );
}
