import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import globalStyles from 'src/styles/global.styles';
import {styles} from './Filter.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {FilterGenre} from './components/FilterGenre/FilterGenre';
import {changeFilter} from 'src/store/filterSlice/filterSlice';
import {CustomText} from 'src/components/CustomText/CustomText';
import {getGenresThunk} from 'src/store/filterSlice/filterThunk';

export const FilterScreen: React.FC = () => {
  const {genres, query} = useAppSelector(state => state.filter);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [checkBoxes, setCheckBoxes] = useState(genres ? genres : []);
  console.log(genres)
  useEffect(() => {
    if (genres === null) {
      dispatch(getGenresThunk());
    }
  }, [dispatch, genres]);
  const handleCheckboxPress = (checked: boolean, id: number) => {};

  const handleAplly = () => {
    navigation.push('Home');
  };

  return (
    <SafeAreaView style={styles.filter}>
      <FlatList
        data={[genres]}
        renderItem={_ => {
          return (
            <View style={styles.filterContainer}>
              <View>
                <CustomText h2 style={globalStyles.textBigBold}>
                  Genres
                </CustomText>
                <FlatList
                  data={genres}
                  renderItem={({item}) => (
                    <FilterGenre {...item} onPress={handleCheckboxPress} />
                  )}
                  keyExtractor={item => `${item.id}`}
                />
              </View>
              <View>
                <CustomText h2 style={globalStyles.textBigBold}>
                  Price
                </CustomText>
              </View>
              <View>
                <CustomText h2 style={globalStyles.textBigBold}>
                  Sort by
                </CustomText>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.button}>
        <CustomButton title={'Apply'} onPress={handleAplly} />
      </View>
    </SafeAreaView>
  );
};
