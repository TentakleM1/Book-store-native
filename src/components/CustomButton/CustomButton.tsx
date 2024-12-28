import React, { ReactNode } from 'react';
import {
  Pressable,
  PressableProps,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';
import getStyles from './CustomButton.styles';
import { SvgProps } from 'react-native-svg';
import { CustomText } from '../CustomText/CustomText';

export type CustomButtonPropsType = {
  title?: string;
  img?: ReactNode | React.FC<SvgProps>;
  isBackground?: boolean;
  styles?: Record<string, string | number>;
} & PressableProps;

export const CustomButton: React.FC<CustomButtonPropsType> = props => {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const animatedButton = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  return (
    <Pressable
      {...props}
      onPressIn={e => {
        props.onPressIn && props.onPressIn(e);
        opacity.value = withSequence(withTiming(0.3, {duration: 200}));
        scale.value = withSequence(withTiming(1.1, {duration: 300}));
      }}
      onPressOut={e => {
        props.onPressOut && props.onPressOut(e);
        opacity.value = withSequence(withTiming(1, {duration: 200}));
        scale.value = withSequence(withTiming(1, {duration: 300}));
      }}
      onPress={props.onPress}>
      <Animated.View style={[getStyles(props.isBackground).button, props.styles, animatedButton]}>
        {typeof props.img === 'function' ? props.img({}) : props.img}
        {props.title && <CustomText h4>{props.title}</CustomText>}
      </Animated.View>
    </Pressable>
  );
};
