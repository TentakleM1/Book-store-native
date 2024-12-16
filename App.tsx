import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import { BooksNavigator } from 'src/navigation/BooksNavigator';
import { AuthNavigator } from 'src/navigation/AuthNavigator';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  });

  return (
    <NavigationContainer>
      {true ? <BooksNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default App;
