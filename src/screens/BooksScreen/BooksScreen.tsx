import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView} from 'react-native';
import styles from './Books.style';
import {CatalogHeader} from 'src/screens/BooksScreen/components/CatalogHeader/CatalogHeader';
import {CatalogBanner} from 'src/screens/BooksScreen/components/CatalogBanner/CatalogBanner';
import {Catalog} from 'src/screens/BooksScreen/components/Catalog/Catalog';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {getBookFilterThunk} from 'src/store/bookSlice/bookThunk';
import {useNavigation} from '@react-navigation/native';
import {addBook, IBook} from 'src/store/bookSlice/bookSlice';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {usePaginationOrRefreshBooks} from './usePaginationOrRefreshBooks';
import {changeQuery} from 'src/store/filterSlice/filterSlice';
import {BookCart} from 'src/components/BookCart/BookCart';

export const BooksScreen: React.FC = () => {
  const {books, meta} = useAppSelector(state => state.book);
  const query = useAppSelector(state => state.filter.query);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const {isRefreshing, handleRefresh, loadMore} = usePaginationOrRefreshBooks({
    meta,
    query,
  });

  useEffect(() => {
    dispatch(
      getBookFilterThunk({
        ...query,
        page: meta.page,
      }),
    );
  }, [dispatch, meta.page, query]);

  const handleFilter = async () => {
    navigation.navigate('Filter', {
      ...query,
      page: meta.page,
    });
  };
  const handleBook = (book: IBook) => {
    dispatch(addBook(book));
    navigation.navigate('Book', {id: book.id});
  };

  const handleSearch = async (text: string) => {
    dispatch(changeQuery({...query, search: text}));
    await dispatch(getBookFilterThunk({...query, page: 1, search: text}));
  };
  return (
    <SafeAreaView style={styles.books}>
      <CatalogHeader
        value={query.search ? query.search : ''}
        handleSearch={handleSearch}
      />
      <Catalog handleFilter={handleFilter} />
      <FlatList
        data={books}
        ListHeaderComponentStyle={styles.booksContainer}
        ListHeaderComponent={<CatalogBanner />}
        numColumns={2}
        columnWrapperStyle={styles.catalogBooks}
        renderItem={({item}) => (
          <BookCart book={item} onPress={() => handleBook(item)} />
        )}
        ListEmptyComponent={<ActivityIndicator animating size="large" />}
        keyExtractor={item => `${Date.now()}${item.id}`}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        onEndReached={loadMore}
        onEndReachedThreshold={0.3}
      />
    </SafeAreaView>
  );
};
