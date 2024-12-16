import React from 'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Input} from 'src/components/Input/Input';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import images from 'src/assets/imgs/images';
import styles from './LoginIn.styles';

export const LoginInScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleLogin = () => {
    navigation.push('Books');
  };

  const handleChangeScreen = () => {
    navigation.push('Sign');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.baseText}>Login In</Text>
        <Input
          img={images.mail}
          placeholder={'Email'}
          secureTextEntry={false}
        />
        <Input
          img={images.hide}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <CustomButton title={'Log In'} onPress={handleLogin} />
        <CustomButton title={'Sign up'} onPress={handleChangeScreen} />
      </View>
    </SafeAreaView>
  );
};
