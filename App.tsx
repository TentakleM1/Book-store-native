import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { LoginIn } from './src/screens/LoginIn/LoginIn';
import { SignUp } from './src/screens/SignUp/SignUp';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginIn} />
      <Stack.Screen name="Sign" component={SignUp} />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
  );
}

export default App;
