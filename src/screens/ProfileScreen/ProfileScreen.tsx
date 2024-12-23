import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
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
import {PasswordInput} from 'src/components/PasswordInput/PasswordInput';
import {IconButton} from 'src/components/IconButton/IconButton';
import globalStyles from 'src/styles/global.style';
import {logout} from 'src/store/userSlice/userSlice';

export const ProfileScreen: React.FC = () => {
  const user = useAppSelector(state =>
    state.user.user !== null
      ? state.user.user
      : {id: 0, avatar: 'string', fullName: 'string', email: 'string'},
  );
  const [isOpenChangeProfile, setIsOpenChangeProfile] = useState<{
    isProfile: boolean;
    isPaswword: boolean;
  }>({
    isProfile: false,
    isPaswword: false,
  });
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

  const openChangeProfile = () => {
    setIsOpenChangeProfile({
      ...isOpenChangeProfile,
      isProfile: !isOpenChangeProfile.isProfile,
    });
  };

  const openChangePassword = () => {
    setIsOpenChangeProfile({
      ...isOpenChangeProfile,
      isPaswword: !isOpenChangeProfile.isPaswword,
    });
  };

  const updateProfile = async (data: IUpdateProfile) => {
    dispatch(updateProfileThunk(data));
  };

  const updatePassword = (data: IUpdatePassword) => {
    console.log(data);
  };

  const updateAvatar = () => {
    navigation.push('Avatar');
  };

  const logoutUser = () => {
    dispatch(logout());
    navigation.push('Login');
  };

  return (
    <SafeAreaView style={styles.profile}>
      <ScrollView>
        <View style={styles.avatar}>
          <Image
            source={{
              uri: `${SERVER_URL}/uploads/avatars/${user?.avatar}`,
              method: 'GET',
            }}
            style={{width: '100%', height: '100%'}}
          />
          <View style={styles.avatarButton}>
            <IconButton img={images.camera} onPress={updateAvatar} />
          </View>
        </View>
        <View style={styles.information}>
          <View style={styles.titleChange}>
            <Text style={globalStyles.textBigBlack}>Personal information</Text>
            <Pressable onPress={openChangeProfile}>
              <Text style={styles.textChange}>Change information</Text>
            </Pressable>
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
          {isOpenChangeProfile.isProfile && (
            <CustomButton
              title={'Update'}
              onPress={handleSubmitProfile(updateProfile)}
            />
          )}
          <View style={styles.titleChange}>
            <Text style={globalStyles.textBigBlack}>Password</Text>
            <Pressable onPress={openChangePassword}>
              <Text style={styles.textChange}>Change information</Text>
            </Pressable>
          </View>
          <Controller
            control={controlPassword}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <PasswordInput
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Old password"
              />
            )}
            name={'password'}
          />
          {isOpenChangeProfile.isPaswword && (
            <>
              <Controller
                control={controlPassword}
                rules={{
                  required: true,
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <PasswordInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
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
                  <PasswordInput
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
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
            </>
          )}
          <CustomButton title={'Logout'} onPress={logoutUser} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
