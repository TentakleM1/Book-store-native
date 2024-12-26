import React from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  GestureResponderEvent,
  Image,
} from 'react-native';
import styles from './CustomButton.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export type CustomButtonPropsType = {
  title: string;
  img?: number;
  backgroundColor?: string;
} & PressableProps;

export const CustomButton: React.FC<CustomButtonPropsType> = props => {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const handlePress = (e: GestureResponderEvent) => {
    props.onPress && props.onPress(e);
    opacity.value = withSequence(withTiming(1, {duration: 200}));
    scale.value = withSequence(withTiming(1, {duration: 300}));
  };

  const animatedButton = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  return (
    <Animated.View
      style={[
        styles.button,
        props.img ? styles.buttonFulltRadius : styles.buttonDefaultRadius,
        {backgroundColor: props.img ? props.backgroundColor : '#344966'},
        animatedButton,
      ]}>
      <Pressable
        {...props}
        onPressIn={() => {
          opacity.value = withSequence(withTiming(0.3, {duration: 200}));
          scale.value = withSequence(withTiming(1.1, {duration: 300}));
        }}
        onPressOut={handlePress}>
        {props.img ? (
          <Image source={props.img} />
        ) : (
          <Text style={styles.buttonText}>{props.title}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
};
