import React from 'react';
import {IconButton, IconButtonPropsType} from '../IconButton/IconButton';
import Heart from 'src/assets/svg/heart.svg';
import getStyles from './LikeButton.styles';

type LikeButtonPropsType = {
  isLike: boolean;
} & IconButtonPropsType;

export const LikeButton: React.FC<LikeButtonPropsType> = props => {
  return (
    <IconButton
      {...props}
      style={[getStyles(props.isLike).like, props.styles]}
      img={<Heart />}
    />
  );
};
