import React from 'react';
import {FlatList} from 'react-native';
import {RatingStar} from './components/RatingStar/RatingStar';
import {IRates} from 'src/store/bookSlice/bookSlice';

type RatingPropsType = {
  isDisabled?: boolean;
  rates: IRates[];
  size: number;
};

export const Rating: React.FC<RatingPropsType> = props => {
  const ratings = [...Array(5)].map((_, index) => {
    if (props.rates.length > 0) {
      if (props.rates[0].value > index) {
        return true;
      }
    }
    return false;
  });
  return (
    <FlatList
      data={ratings}
      horizontal
      renderItem={({item}) => <RatingStar isFull={item} size={props.size} />}
      keyExtractor={(_, index) => `${index}${Date.now()}`}
    />
  );
};
