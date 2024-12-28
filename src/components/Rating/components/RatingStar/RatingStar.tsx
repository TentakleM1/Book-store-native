import React from 'react';
import {IconButton} from 'src/components/IconButton/IconButton';
import FullStar from 'src/assets/svg/fullStar.svg';
import Star from 'src/assets/svg/star.svg';
import getStyles from './RatingStar.styles';

export type StarPropsType = {
  isFull?: boolean;
  size: number;
};

export const RatingStar: React.FC<StarPropsType> = props => {
  return (
    <IconButton
      img={
        props.isFull ? (
          <FullStar width={props.size} height={props.size} />
        ) : (
          <Star width={props.size} height={props.size} />
        )
      }
      isBackground
      styles={getStyles(props.size).star}
    />
  );
};
