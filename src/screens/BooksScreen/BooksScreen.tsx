import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  NativeSyntheticEvent,
  RefreshControl,
  SafeAreaView,
  TextInputKeyPressEventData,
  View,
} from 'react-native';
import styles from './Books.style';
import {CatalogHeader} from 'src/screens/BooksScreen/components/CatalogHeader/CatalogHeader';
import {CatalogBanner} from 'src/screens/BooksScreen/components/CatalogBanner/CatalogBanner';
import {Catalog} from 'src/screens/BooksScreen/components/Catalog/Catalog';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {getBookFilterThunk, IQueryData} from 'src/store/bookSlice/bookThunk';
import {useNavigation} from '@react-navigation/native';
import {addBook, IBook} from 'src/store/bookSlice/bookSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {usePaginationOrRefreshBooks} from './usePaginationOrRefreshBooks';
import {getGenresThunk} from 'src/store/filterSlice/filterThunk';

export const BooksScreen: React.FC = () => {
  const {books, meta} = useAppSelector(state => state.book);
  const genres = useAppSelector(state => state.filter.filters);
  const [textSearch, setTextSearch] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {loadingMore, refreshing, handleRefresh, loadMore} =
    usePaginationOrRefreshBooks({
      search: textSearch,
      ...meta,
    });

  useEffect(() => {
    if (genres === null) {
      dispatch(getGenresThunk());
    }
    if (genres) {
      const genresFilt =
        genres &&
        genres
          .filter(genre => genre.isChecked)
          .map(genre => genre.id)
          .join();
    }
  }, [dispatch, genres]);

  useEffect(() => {
    dispatch(getBookFilterThunk());
  }, []);

  const handleFilter = async () => {
    navigation.navigate('Filter', {
      search: textSearch,
      page: meta.page,
    });
  };

  const handleBook = (book: IBook) => {
    dispatch(addBook(book));
    navigation.navigate('Book', {id: book.id});
  };

  const handleSearch = (text: string) => {
    setTextSearch(text);
  };

  const handleSearchPost = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
  };

  const renderFooter = () => {
    if (!loadingMore || books.length < meta.itemCount) {
      return null;
    }
    return <ActivityIndicator animating size="large" />;
  };

  return (
    <SafeAreaView style={styles.books}>
      <FlatList
        data={[books]}
        renderItem={({item}) => (
          <View style={styles.booksContainer}>
            <CatalogHeader
              value={textSearch}
              onChangeText={handleSearch}
              onKeyPress={handleSearchPost}
            />
            <CatalogBanner />
            <Catalog
              books={item}
              handleBook={handleBook}
              handleFilter={handleFilter}
            />
          </View>
        )}
        keyExtractor={() => `${Date.now()}`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        ListFooterComponent={renderFooter}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};
