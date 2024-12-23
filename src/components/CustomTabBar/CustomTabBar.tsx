import {View} from 'react-native';
import React from 'react';
import {IconButton} from '../IconButton/IconButton';
import images from 'src/assets/imgs/images';
import {styles} from './CustomTabBar.styles';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

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
          <View key={index}>
            <IconButton
              img={
                route.name === 'Books'
                  ? images.homeTab
                  : route.name === 'Profile'
                  ? images.profileTab
                  : route.name === 'Favorite'
                  ? images.unionTab
                  : images.cartTab
              }
              isLike={!isFocused}
              background={'none'}
              onPress={onPress}
            />
          </View>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
