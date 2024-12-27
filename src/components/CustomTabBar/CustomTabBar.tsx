import {Pressable} from 'react-native';
import React from 'react';
import {IconButton} from '../IconButton/IconButton';
import {styles} from './CustomTabBar.styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import { FilterIconTabBar } from './FilterIconTabBar';

const CustomTabBar: React.FC<BottomTabBarProps> = props => {
  const {state, navigation} = props;
  return (
    <Pressable style={styles.customTabBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return <IconButton key={index} img={FilterIconTabBar(route.name)} />;
      })}
    </Pressable>
  );
};

export default CustomTabBar;
