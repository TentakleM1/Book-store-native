import React, {useState} from 'react';
import {View, Image, Pressable} from 'react-native';
import styles from './Profile.styles';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {SERVER_URL} from 'src/config/api.config';
import {Input} from 'src/components/Input/Input';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {Label} from 'src/components/Label/Label';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Camera from 'src/assets/svg/camera.svg';
import {
  passwordUpdateSchema,
  profileUpdateSchema,
} from 'src/utils/validation/userSchema';
import {IUpdatePassword, IUpdateProfile} from './types';
import {
  getUserThunk,
  updatePasswordThunk,
  updateProfileThunk,
} from 'src/store/userSlice/userThunk';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {PasswordInput} from 'src/components/PasswordInput/PasswordInput';
import {IconButton} from 'src/components/IconButton/IconButton';
import globalStyles from 'src/styles/global.styles';
import {logout} from 'src/store/userSlice/userSlice';
import {CustomText} from 'src/components/CustomText/CustomText';
import User from 'src/assets/svg/user.svg';
import Mail from 'src/assets/svg/mail.svg';
import {RefreshLayout} from 'src/components/RefreshLayout/RefreshLayout';

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
  const [refreshing, setRefreshing] = useState(false);
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
    await dispatch(updateProfileThunk(data));
  };

  const updatePassword = async (data: IUpdatePassword) => {
    await dispatch(updatePasswordThunk(data));
  };

  const updateAvatar = () => {
    navigation.navigate('Avatar');
  };
  const logoutUser = () => {
    dispatch(logout());
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    const refreshUser = await dispatch(getUserThunk()).unwrap();
    if (refreshUser) {
      setRefreshing(false);
    }
  };

  return (
    <RefreshLayout handleRefresh={handleRefresh} refreshing={refreshing}>
      <View style={styles.avatar}>
        <Image
          source={{
            uri: `${SERVER_URL}/uploads/avatars/${user?.avatar}`,
            method: 'GET',
          }}
          style={globalStyles.displayFull}
        />
        <View style={styles.avatarButton}>
          <IconButton img={<Camera />} onPress={updateAvatar} />
        </View>
      </View>
      <View style={styles.information}>
        <View style={styles.titleChange}>
          <CustomText h2 style={globalStyles.textBigBold}>
            Personal information
          </CustomText>
          <Pressable onPress={openChangeProfile}>
            <CustomText h4 style={styles.textChange}>
              Change information
            </CustomText>
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
              img={User}
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
              img={Mail}
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
          <CustomText h2 style={globalStyles.textBigBold}>
            Password
          </CustomText>
          <Pressable onPress={openChangePassword}>
            <CustomText h4 style={styles.textChange}>
              Change information
            </CustomText>
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
            <Label
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
            <Label
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
    </RefreshLayout>
  );
};
