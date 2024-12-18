import React from 'react';
import {SafeAreaView, View, Text, Image, ScrollView} from 'react-native';
import styles from './Profile.styles';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {SERVER_URL} from 'src/config/api.config';
import {Input} from 'src/components/Input/Input';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {Lable} from 'src/components/Lable/Lable';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import images from 'src/assets/imgs/images';
import {
  passwordUpdateSchema,
  profileUpdateSchema,
} from 'src/utils/validation/userSchema';
import {IUpdatePassword, IUpdateProfile} from './types';
import {updateProfileThunk} from 'src/store/userSlice/userThunk';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const ProfileScreen: React.FC = () => {
  const user = useAppSelector(state =>
    state.user.user !== null
      ? state.user.user
      : {id: 0, avatar: 'string', fullName: 'string', email: 'string'},
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const {control: controlProfile, handleSubmit: handleSubmitProfile} = useForm({
    resolver: yupResolver(profileUpdateSchema),
    defaultValues: {
      fullName: user.fullName,
      email: user.email,
    },
  });

  const {
    control: controlPassword,
    handleSubmit: handleSubmitPassword,
    formState: {errors: errorsPassword},
  } = useForm({
    resolver: yupResolver(passwordUpdateSchema),
    defaultValues: {
      password: '',
      passwordNew: '',
      passwordReplay: '',
    },
  });

  const updateProfile = async (data: IUpdateProfile) => {
    dispatch(updateProfileThunk(data));
  };

  const updatePassword = (data: IUpdatePassword) => {
    console.log(data);
  };

  const updateAvatar = () => {
    navigation.push('Avatar');
  };

  return (
    <SafeAreaView style={styles.profile}>
      <ScrollView style={styles.scroll}>
        <View style={styles.avatar}>
          <Image
            source={{
              uri: `${SERVER_URL}/uploads/avatars/${user?.avatar}`,
              method: 'GET',
            }}
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.avatarButton}>
            <CustomButton title="avatar" onPress={updateAvatar} />
          </View>
        </View>
        <View style={styles.information}>
          <View>
            <Text style={styles.text}>Personal information</Text>
            <Text style={styles.text}>Change information</Text>
          </View>
          <Controller
            control={controlProfile}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                img={images.profile}
                placeholder="Full name"
              />
            )}
            name={'fullName'}
          />
          <Controller
            control={controlProfile}
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
          <CustomButton
            title={'Update'}
            onPress={handleSubmitProfile(updateProfile)}
          />
          <View>
            <Text style={styles.text}>Password</Text>
            <Text style={styles.text}>Change information</Text>
          </View>
          <Controller
            control={controlPassword}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                img={images.hide}
                placeholder="Old password"
              />
            )}
            name={'password'}
          />
          <Controller
            control={controlPassword}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <Input
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                img={images.hide}
                placeholder="New password"
              />
            )}
            name={'passwordNew'}
          />
          <Lable
            title={'Enter your password'}
            errors={errorsPassword.passwordNew?.message}
          />
          <Controller
            control={controlPassword}
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
            title={'Repeat your password without errors'}
            errors={errorsPassword.passwordReplay?.message}
          />
          <CustomButton
            title={'Confirm'}
            onPress={handleSubmitPassword(updatePassword)}
          />
          <CustomButton title={'Logout'} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
