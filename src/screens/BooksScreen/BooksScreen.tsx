import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './Books.style';
import {Header} from 'src/components/Header/Header';
import { Banner } from 'src/components/Banner/Banner';
import { Catalog } from 'src/components/Catalog/Catalog';

export const BooksScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.books}>
      <Header />
      <Banner />
      <Catalog />
    </SafeAreaView>
  );
};
