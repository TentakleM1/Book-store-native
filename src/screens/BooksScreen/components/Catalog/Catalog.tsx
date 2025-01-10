import React from 'react';
import {View} from 'react-native';
import {styles} from './Catalog.style';
import globalStyles from 'src/styles/global.styles';
import {IconButton} from 'src/components/IconButton/IconButton';
import {CustomText} from 'src/components/CustomText/CustomText';
import Filter from 'src/assets/svg/filter.svg';

type CatalogPropsType = {
  handleFilter: () => void;
};

export const Catalog: React.FC<CatalogPropsType> = props => {
  return (
    <View style={styles.catalogTitle}>
      <CustomText h2 style={globalStyles.textBigBold}>
        Catalog
      </CustomText>
      <IconButton img={<Filter />} isBackground onPress={props.handleFilter} />
    </View>
  );
};
