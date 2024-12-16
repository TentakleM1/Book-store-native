import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './Profile.styles';

export const ProfileScreen: React.FC = () => {

  return (
    <SafeAreaView style={styles.profile}>
        <View>
            <Text>Profile</Text>
        </View>
    </SafeAreaView>
  );
};
