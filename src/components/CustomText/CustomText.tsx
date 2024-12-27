import React, { ReactNode } from 'react';
import {Text} from 'react-native';
import {fontSize} from 'src/styles/fontSize.styles';

type CustomTextPropsType = {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  bold?: boolean;
  title?: string;
  style?: Record<string, string | number>;
  children: ReactNode
};

export const CustomText: React.FC<CustomTextPropsType> = props => {
  return (
    <Text
      style={[
        props.h1 && fontSize.h1,
        props.h2 && fontSize.h2,
        props.h3 && fontSize.h3,
        props.h4 && fontSize.h4,
        props.h5 && fontSize.h5,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};
