import React from 'react';
import { Image, SafeAreaView, Text, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'src/components/Input/Input';
import { CustomButton } from 'src/components/CustomButton/CustomButton';
import images from 'src/assets/imgs/images';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './SignUp.styles';

export const SignUpScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const handleSign = () => {
    console.log('sign');
  };

  const handleChangeScreen = () => {
    navigation.push('Login');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.baseText}>Sign Up</Text>
        <Input img={images.mail} placeholder={'Email'} secureTextEntry={false} />
        <Input img={images.hide} placeholder={'Password'} secureTextEntry={true} />
        <Input img={images.hide} placeholder={'Password repeat'} secureTextEntry={true} />
        <CustomButton title={'Sign up'} onPress={handleSign}/>
        <CustomButton title={'Login In'} onPress={handleChangeScreen}/>
      </View>
    </SafeAreaView>
  );
};
