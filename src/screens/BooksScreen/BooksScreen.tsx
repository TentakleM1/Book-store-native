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
import {Header} from 'src/components/Header/Header';
import {Banner} from 'src/components/Banner/Banner';
import {Catalog} from 'src/components/Catalog/Catalog';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {getBookFilterThunk, IQueryData} from 'src/store/bookSlice/bookThunk';
import {useNavigation} from '@react-navigation/native';
import {addBook, IBook} from 'src/store/bookSlice/bookSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {usePagination} from 'src/hoc/usePagination/usePagination';

export const BooksScreen: React.FC = () => {
  const {books, meta} = useAppSelector(state => state.book);
  const [textSearch, setTextSearch] = useState<string>('');
  const [filter, setFilter] = useState<IQueryData>({
    page: meta.page,
    search: '',
  });
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {loadingMore, refreshing, handleRefresh, loadMore} = usePagination({
    ...filter,
    ...meta,
  });

  useEffect(() => {
    dispatch(getBookFilterThunk(filter));
  }, [dispatch, filter]);

  const handleFilter = () => {
    navigation.navigate('Filter', filter);
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
    console.log(e);
    // setFilter({...filter, search: search});
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
            <Header
              value={textSearch}
              onChangeText={handleSearch}
              onKeyPress={handleSearchPost}
            />
            <Banner />
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
