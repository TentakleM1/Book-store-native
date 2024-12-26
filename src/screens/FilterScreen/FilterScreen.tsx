import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import globalStyles from 'src/styles/global.styles';
import {styles} from './Filter.style';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {FilterGenre} from './components/FilterGenre/FilterGenre';
import {changeFilter} from 'src/store/filterSlice/filterSlice';

export const FilterScreen: React.FC = () => {
  const genres = useAppSelector(state => state.filter.filters);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [checkBoxes, setCheckBoxes] = useState(genres ? genres : []);

  const handleCheckboxPress = (checked: boolean, id: number) => {
    if (id === 0) {
      setCheckBoxes(
        checkBoxes.map(item => ({
          ...item,
          isChecked: checked,
        })),
      );
      return;
    }

    setCheckBoxes(
      checkBoxes.map(item =>
        item.id === id ? {...item, isChecked: checked} : item,
      ),
    );
  };

  const handleAplly = async () => {
    await dispatch(changeFilter(checkBoxes));
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.filter}>
      <FlatList
        data={[genres]}
        renderItem={_ => {
          return (
            <View style={styles.filterContainer}>
              <View>
                <Text style={globalStyles.textBigBlack}>Genres</Text>
                <FlatList
                  data={genres}
                  renderItem={({item}) => (
                    <FilterGenre {...item} onPress={handleCheckboxPress} />
                  )}
                  keyExtractor={item => `${item.id}`}
                />
              </View>
              <View>
                <Text style={globalStyles.textBigBlack}>Price</Text>
              </View>
              <View>
                <Text style={globalStyles.textBigBlack}>Sort by</Text>
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
