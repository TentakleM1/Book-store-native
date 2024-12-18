import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import images from 'src/assets/imgs/images';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import styles from './SignUp.styles';
import {signUpSchema} from 'src/utils/validation/authSchema';
import {Input} from 'src/components/Input/Input';
import {Controller, useForm} from 'react-hook-form';
import {Lable} from 'src/components/Lable/Lable';
import {yupResolver} from '@hookform/resolvers/yup';
import {ISignUp} from 'src/types/types';
import {useAppDispatch} from 'src/store/store';
import {signUpThunk} from 'src/store/userSlice/userThunk';

export const SignUpScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordReplay: '',
    },
  });

  const signUp = async (data: ISignUp) => {
    await dispatch(signUpThunk(data));
  };

  const handleChangeScreen = () => {
    navigation.push('Login');
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Image source={images.logo} style={styles.logo} />
        <Text style={styles.baseText}>Sign Up</Text>
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
                img={images.mail}
                placeholder="Email"
              />
            )}
            name={'email'}
          />
          <Lable title="Email" errors={errors.email?.message} />
        </View>
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
                img={images.hide}
                placeholder="Password"
              />
            )}
            name={'password'}
          />
          <Lable title="Password" errors={errors.password?.message} />
        </View>
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
                img={images.hide}
                placeholder="Password replay"
              />
            )}
            name={'passwordReplay'}
          />
          <Lable
            title="Password replay"
            errors={errors.passwordReplay?.message}
          />
        </View>
        <CustomButton title={'Sign up'} onPress={handleSubmit(signUp)} />
        <CustomButton title={'Login in'} onPress={handleChangeScreen} />
      </View>
    </SafeAreaView>
  );
};
