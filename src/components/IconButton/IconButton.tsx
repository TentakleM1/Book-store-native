import React, {useState} from 'react';
import {CustomButton, ICustomButtonProps} from '../CustomButton/CustomButton';
import {GestureResponderEvent, View} from 'react-native';
import {styles} from './IconButton.styles';

interface IIconButtonProps
  extends Omit<ICustomButtonProps, 'title' | 'backgroundColor'> {
  background: 'default' | 'none' | 'light';
  isLike?: boolean;
}

export const IconButton: React.FC<IIconButtonProps> = props => {
  const [isLike, setIsLike] = useState<boolean>(props.isLike ? props.isLike : false);
  const onPress = (e: GestureResponderEvent) => {
    if (props.isLike !== undefined) {
      setIsLike(!isLike);
    }
    props.onPress && props.onPress(e);
  };

  return (
    <View style={[styles.iconButton, isLike && styles.like]}>
      <CustomButton
        {...props}
        backgroundColor={
          props.background === 'default'
            ? '#344966'
            : props.background === 'light'
            ? '#F0F4EF'
            : ''
        }
        onPress={onPress}
        title="icon"
      />
    </View>
  );
};
