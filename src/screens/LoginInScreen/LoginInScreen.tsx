import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import images from 'src/assets/imgs/images';
import styles from './LoginIn.styles';
import {loginInSchema} from 'src/utils/validation/authSchema';
import {yupResolver} from '@hookform/resolvers/yup';
import {Controller, useForm} from 'react-hook-form';
import {Input} from 'src/components/Input/Input';
import {Label} from 'src/components/Label/Label';
import {ILogin} from 'src/types/types';
import {loginInThunk} from 'src/store/userSlice/userThunk';
import {useAppDispatch} from 'src/store/store';
import {PasswordInput} from 'src/components/PasswordInput/PasswordInput';
import Mail from 'src/assets/svg/mail.svg';

export const LoginInScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(loginInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const loginIn = async (data: ILogin) => {
    await dispatch(loginInThunk(data));
  };
  const handleChangeScreen = () => {
    navigation.push('Sign');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.baseText}>Login In</Text>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                img={Mail}
                placeholder="Email"
              />
            )}
            name={'email'}
          />
          <Label title="Email" errors={errors.email?.message} />
        </View>
        <View>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <PasswordInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Password"
              />
            )}
            name={'password'}
          />
          <Label title="Password" errors={errors.password?.message} />
        </View>
        <View style={{width: 200, gap: 20}}>
          <CustomButton title={'Login in'} onPress={handleSubmit(loginIn)} />
          <CustomButton title={'Sign up'} onPress={handleChangeScreen} />
        </View>
      </View>
    </SafeAreaView>
  );
};
