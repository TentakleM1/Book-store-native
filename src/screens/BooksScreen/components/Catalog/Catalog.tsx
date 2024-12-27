import React from 'react';
import {FlatList, View} from 'react-native';
import {styles} from './Catalog.style';
import globalStyles from 'src/styles/global.styles';
import {BookCart} from 'src/components/BookCart/BookCart';
import {IconButton} from 'src/components/IconButton/IconButton';
import {IBook} from 'src/store/bookSlice/bookSlice';
import {CustomText} from 'src/components/CustomText/CustomText';
import Filter from 'src/assets/svg/filter.svg';

type CatalogPropsType = {
  books: IBook[];
  handleBook: (item: IBook) => void;
  handleFilter: () => void;
};

export const Catalog: React.FC<CatalogPropsType> = props => {
  return (
    <View style={styles.catalog}>
      <View style={styles.catalogTitle}>
        <CustomText h2 style={globalStyles.textBigBold}>
          Catalog
        </CustomText>
        <IconButton
          img={<Filter />}
          isBackground
          onPress={props.handleFilter}
        />
      </View>
      <View>
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
