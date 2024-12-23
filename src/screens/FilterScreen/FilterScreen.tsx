import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {getGenresApi} from 'src/api/genresApi/genresApi';
import globalStyles from 'src/styles/global.style';

export const FilterScreen: React.FC = () => {
  const [filterList, setFilterList] = useState<[] | null>(null);
  const getFilter = async () => {
    const filter = await getGenresApi();
    console.log(filter)
    setFilterList(filter);
  };
  console.log(filterList)
  return (
    <SafeAreaView>
      <View>
        <Text style={globalStyles.textBigBlack}>Filter</Text>
      </View>
    </SafeAreaView>
  );
};
