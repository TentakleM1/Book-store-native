import React, {ReactNode, useCallback} from 'react';
import {RefreshControl, SafeAreaView, ScrollView} from 'react-native';
import {styles} from './RefreshLayout.styles';

type RefreshLayoutPropsType = {
  refreshing: boolean;
  handleRefresh: () => void;
  children: ReactNode;
};

export const RefreshLayout: React.FC<RefreshLayoutPropsType> = props => {
  const onRefresh = useCallback(() => {
    props.handleRefresh();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={props.refreshing} onRefresh={onRefresh} />
        }>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
};
