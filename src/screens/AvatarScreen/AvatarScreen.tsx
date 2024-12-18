import React, {useState} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
// import {useAppDispatch} from 'src/store/store';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {
  Asset,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {styles} from './Avatar.style';

type CreateFormDataType = (photo: Asset | null) => FormData;

const createFormData: CreateFormDataType = photo => {
  const data = new FormData();
  if (photo === null) {
    return data;
  }
  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri: photo.uri,
  });

  return data;
};

export const AvatarScreen: React.FC = () => {
  //   const dispatch = useAppDispatch();
  const [photo, setPhoto] = useState<Asset | null>(null);

  const chooiceAvatar = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
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

  const uploadAvatar = () => {
    console.log(createFormData(photo));
  };

  return (
    <SafeAreaView style={styles.avatar}>
      <View>
        {photo !== null && (
          <Image
            source={{
              uri: photo.uri,
            }}
            style={{width: 400, height: 400}}
          />
        )}
        <View>
          <CustomButton title="chooice avatar" onPress={chooiceAvatar} />
          <CustomButton title="camera" onPress={photoAvatar} />
          <CustomButton title="upload" onPress={uploadAvatar} />
        </View>
      </View>
    </SafeAreaView>
  );
};
