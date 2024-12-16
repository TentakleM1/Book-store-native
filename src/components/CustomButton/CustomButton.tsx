import React from 'react';
import {
  Pressable,
  PressableProps,
  Text,
  GestureResponderEvent,
} from 'react-native';
import styles from './CustomButton.styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

interface ICustomButtonProps extends PressableProps {
  title: string;
}

export const CustomButton: React.FC<ICustomButtonProps> = props => {
  const opacity = useSharedValue(1);
  const scale = useSharedValue(1);
  const handlePress = (e: GestureResponderEvent) => {
    props.onPress && props.onPress(e);

    opacity.value = withSequence(
      withTiming(0.3, { duration: 200 }),
      withTiming(1, { duration: 200 })
    );
    scale.value = withSequence(
      withTiming(1.2, { duration: 300 }),
      withTiming(1, { duration: 300 })
    );
  };

  const animatedButton = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{scale: scale.value}],
  }));

  return (
    <Animated.View style={[styles.button, animatedButton]}>
      <Pressable {...{...props, onPress: handlePress}}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable>
    </Animated.View>
  );
};
