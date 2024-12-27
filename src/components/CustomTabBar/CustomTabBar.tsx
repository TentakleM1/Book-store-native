import {View} from 'react-native';
import React from 'react';
import {styles} from './CustomTabBar.styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {FilterIconTabBar} from './FilterIconTabBar';
import {FocusButton} from './components/FocusButton/FocusButton';

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
          <FocusButton
            key={index}
            img={FilterIconTabBar(route.name)}
            onPress={onPress}
            isFocus={isFocused}
          />
        );
      })}
    </View>
  );
};

export default CustomTabBar;
