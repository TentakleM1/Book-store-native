import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BooksNavigator} from './BooksNavigator';
import {AuthNavigator} from './AuthNavigator';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {getMeThunk} from 'src/store/userSlice/userThunk';
import BootSplash from 'react-native-bootsplash';

export function RootNavigation() {
  const {user} = useAppSelector(state => state.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const init = async () => {
      if (user === null) {
        await dispatch(getMeThunk());
      }
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  });

  if (user !== null) {
    return (
      <NavigationContainer>
        {user ? <BooksNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
  }
}
