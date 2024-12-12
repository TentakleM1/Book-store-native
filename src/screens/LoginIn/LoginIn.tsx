import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { Input } from 'components/Input/Input';
import { CustomButton } from 'components/CustomButton/CustomButton';
import images from 'assets/imgs/images';

export const LoginIn: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert('login');
  };

  const handleChangeScreen = () => {
    navigation.push('Sign');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.baseText}>Login In</Text>
        <Input img={'mail'} placeholder={'Email'} isSecure={false} />
        <Input img={'hide'} placeholder={'Password'} isSecure={true} />
        <CustomButton title={'Log In'} handlePress={handleLogin} />
        <CustomButton title={'Sign up'} handlePress={handleChangeScreen} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  container: {
    height: 300,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    rowGap: 20,
  },

  baseText: {
    color: 'black',
    fontWeight: '800',
    fontSize: 28,
  },

  container__form: {
    backgroundColor: 'red',
  },

  logo: {
    width: 88,
    height: 46,
  },
});
