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
          {photo !== null && (
            <Image
              source={{
                uri: photo.uri,
              }}
              style={{width: 400, height: 400}}
            />
          )}
        </View>
        <View style={styles.buttonCantainer}>
          <CustomButton title="chooice" onPress={chooiceAvatar} />
          <CustomButton title="camera" onPress={photoAvatar} />
          <CustomButton title="upload" onPress={uploadAvatar} />
        </View>
      </View>
    </SafeAreaView>
  );
};
