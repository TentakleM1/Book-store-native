import React, {useState} from 'react';
import {View} from 'react-native';
import {Input} from 'src/components/Input/Input';
import Search from 'src/assets/svg/search.svg';

type CatalogHeaderPropsType = {
  value: string;
  handleSearch: (text: string) => void;
};

export const CatalogHeader: React.FC<CatalogHeaderPropsType> = props => {
  const [textSearch, onChangeTextSearch] = useState<string>(props.value);
  return (
    <View>
      <Input
        img={Search}
        value={textSearch}
        onChangeText={onChangeTextSearch}
        onEndEditing={() => props.handleSearch(textSearch)}
        placeholder="Search"
      />
    </View>
  );
};
