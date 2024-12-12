import React from 'react';
import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'components/Input/Input';
import images from 'assets/imgs/images';
import { CustomButton } from 'components/CustomButton/CustomButton';

export const SignUp: React.FC = () => {
  const navigation = useNavigation();

  const handleSign = () => {
    Alert.alert('Sign');
  };

  const handleChangeScreen = () => {
    navigation.push('Login');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.baseText}>Login In</Text>
        <Input img={'mail'} placeholder={'Email'} isSecure={false} />
        <Input img={'hide'} placeholder={'Password'} isSecure={true} />
        <Input img={'hide'} placeholder={'Password repeat'} isSecure={true} />
        <CustomButton title={'Sign up'} handlePress={handleSign}/>
        <CustomButton title={'Login In'} handlePress={handleChangeScreen}/>
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
