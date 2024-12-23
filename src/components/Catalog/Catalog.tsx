import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Catalog.style';
import globalStyles from 'src/styles/global.style';
import {BookCart} from '../BookCart/BookCart';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {getBooksThunk} from 'src/store/bookSlice/bookThunk';
import {IconButton} from '../IconButton/IconButton';
import images from 'src/assets/imgs/images';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const Catalog: React.FC = () => {
  const [count, setCount] = useState(0);
  const books = useAppSelector(state => state.book.books);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  useEffect(() => {
    if (count < 1) {
      dispatch(getBooksThunk());
      setCount(1);
    }
  }, [books, dispatch, count]);

  const handleFilter = () => {
    navigation.navigate('Filter');
  };

  return (
    <View style={styles.catalog}>
      <View style={styles.catalogTitle}>
        <Text style={globalStyles.textBigBold}>Catalog</Text>
        <IconButton
          img={images.filter}
          background={'light'}
          onPress={handleFilter}
        />
      </View>
      <View style={styles.catalogBooks}>
        <FlatList
          data={books}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            columnGap: 20,
            marginBottom: 40,
          }}
          renderItem={({item}) => <BookCart {...item} />}
          keyExtractor={item => `${item.id}${Date.now()}`}
        />
      </View>
    </View>
  );
};
