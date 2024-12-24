import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList, SafeAreaView, Text, View} from 'react-native';
import {getGenresThunk} from 'src/store/filterSlice/filterThunk';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import globalStyles from 'src/styles/global.style';
import {styles} from './Filter.style';
import {IMeta} from 'src/store/bookSlice/bookSlice';
import {ParamListBase, RouteProp, useNavigation} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface IFilterGenreProps {
  id: number;
  name: string;
}

const FilterGenre: React.FC<IFilterGenreProps> = props => {
  return (
    <View>
      <Text style={globalStyles.textBigBlack}>{props.name}</Text>
    </View>
  );
};

interface IFilterScreenProps {
  route: RouteProp<{params: {page: number; search: string}}, 'params'>;
}

export const FilterScreen: React.FC<IFilterScreenProps> = ({route}) => {
  const genres = useAppSelector(state => state.filter.filters);
  const dispatch = useAppDispatch();
  const [filter, setFilter] = useState(route.params);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  useEffect(() => {
    dispatch(getGenresThunk());
  }, [dispatch]);

  useEffect(() => {
    const backAction = () => {
      navigation.navigate('Books', filter);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  return (
    <SafeAreaView style={styles.filter}>
      <View>
        <Text style={globalStyles.textBigBlack}>Genres</Text>
        <FlatList
          data={genres}
          renderItem={({item}) => <FilterGenre {...item} />}
          keyExtractor={item => `${item.id}`}
        />
      </View>
      <View>
        <Text style={globalStyles.textBigBlack}>Price</Text>
      </View>
    </SafeAreaView>
  );
};
