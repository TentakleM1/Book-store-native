import React from 'react';
import {SafeAreaView, View} from 'react-native';
import styles from './Books.style';
import {Header} from 'src/components/Header/Header';
import {Banner} from 'src/components/Banner/Banner';
import {Catalog} from 'src/components/Catalog/Catalog';
import {RefreshLayout} from 'src/components/RefreshLayout/RefreshLayout';

export const BooksScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.books}>
      <RefreshLayout>
        <View style={styles.booksContainer}>
          <Header />
          <Banner />
          <Catalog />
        </View>
      </RefreshLayout>
    </SafeAreaView>
  );
};
