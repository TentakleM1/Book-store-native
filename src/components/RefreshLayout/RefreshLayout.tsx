import React, {useCallback, useState} from 'react';
import {RefreshControl, ScrollView} from 'react-native';

export const RefreshLayout: React.FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {children}
    </ScrollView>
  );
};
