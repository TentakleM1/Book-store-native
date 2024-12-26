import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {useAppDispatch} from 'src/store/store';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {styles} from './Avatar.style';
import {uploadAvatarThunk} from 'src/store/userSlice/userThunk';
import {useNavigation} from '@react-navigation/native';
import images from 'src/assets/imgs/images';
import globalStyles from 'src/styles/global.styles';

export const AvatarScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [photo, setPhoto] = useState<Asset | null>(null);
  const navigation = useNavigation();

  const chooiceAvatar = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image picker error: ', response.errorCode);
        } else if (response.assets) {
          setPhoto(response.assets[0]);
        }
      },
    );
  };

  const photoAvatar = () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('Image picker error: ', response.errorCode);
        } else if (response.assets) {
          setPhoto(response.assets[0]);
        }
      },
    );
  };

  const uploadAvatar = async () => {
    if (!photo?.base64) {
      return;
    }
    await dispatch(uploadAvatarThunk(photo.base64));
    setPhoto(null);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.avatar}>
        <View>
          <Image
            source={
              photo !== null
                ? {
                    uri: photo.uri,
                  }
                : images.defImg
            }
            style={{width: 400, height: 400, borderRadius: 20}}
          />
        </View>
        <View style={styles.buttonCantainer}>
          <View style={globalStyles.button}>
            <CustomButton title="chooice" onPress={chooiceAvatar} />
          </View>
          <View style={globalStyles.button}>
            <CustomButton title="camera" onPress={photoAvatar} />
          </View>
          <View style={globalStyles.button}>
            <CustomButton title="upload" onPress={uploadAvatar} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
