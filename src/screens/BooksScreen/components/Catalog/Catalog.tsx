import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './Catalog.style';
import globalStyles from 'src/styles/global.styles';
import {BookCart} from 'src/components/BookCart/BookCart';
import {IconButton} from 'src/components/IconButton/IconButton';
import images from 'src/assets/imgs/images';
import {IBook} from 'src/store/bookSlice/bookSlice';

type CatalogPropsType = {
  books: IBook[];
  handleBook: (item: IBook) => void;
  handleFilter: () => void;
}

export const Catalog: React.FC<CatalogPropsType> = props => {
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
      <View >
        <FlatList
          data={props.books}
          numColumns={2}
          columnWrapperStyle={styles.catalogBooks}
          renderItem={({item}) => (
            <BookCart book={item} onPress={() => props.handleBook(item)} />
          )}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    </View>
  );
};
