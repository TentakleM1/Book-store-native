import {Pressable, View} from 'react-native';
import React from 'react';
import {IconButton} from '../IconButton/IconButton';
import {styles} from './CustomTabBar.styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {filterIconTabBar} from './filterIconTabBar';

const CustomTabBar: React.FC<BottomTabBarProps> = props => {
  const {state, navigation} = props;
  return (
    <View style={styles.customTabBar}>
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
        return (
          <Pressable key={index} onPress={onPress}>
            <IconButton
              img={filterIconTabBar(route.name)}
              isLike={!isFocused}
              background={'none'}
            />
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
