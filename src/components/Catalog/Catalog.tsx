import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Catalog.style';
import globalStyles from 'src/styles/global.style';
import {BookCart} from '../BookCart/BookCart';
import {IconButton} from '../IconButton/IconButton';
import images from 'src/assets/imgs/images';
import {IBook} from 'src/store/bookSlice/bookSlice';

interface ICatalogProps {
  books: IBook[];
  handleBook: (item: IBook) => void;
  handleFilter: () => void;
}

export const Catalog: React.FC<ICatalogProps> = props => {
  return (
    <View style={styles.catalog}>
      <View style={styles.catalogTitle}>
        <Text style={globalStyles.textBigBold}>Catalog</Text>
        <IconButton
          img={images.filter}
          background={'light'}
          onPress={props.handleFilter}
        />
      </View>
      <View style={styles.catalogBooks}>
        <FlatList
          data={props.books}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
            columnGap: 20,
            marginBottom: 40,
          }}
          renderItem={({item}) => (
            <BookCart {...item} onPress={() => props.handleBook(item)} />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>
  );
};
