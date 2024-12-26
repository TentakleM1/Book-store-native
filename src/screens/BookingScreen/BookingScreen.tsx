import React, {useEffect} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {Empty} from 'src/components/Empty/Empty';
import globalStyles from 'src/styles/global.styles';
import {styles} from './Booking.styles';
import {useAppDispatch, useAppSelector} from 'src/store/store';
import {BookingBook} from './components/BookingBook/BookingBook';
import {getCartThunk} from 'src/store/bookingSlice/bookingThunk';

// const genres = checkBoxes.filter(genre => {
//   if (genre.isChecked) {
//   }
// });
// console.log(checkBoxes);
// {
//   genres: '1,2,3,4'
// }

export const BookingScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {id, total_price, cartItems} = useAppSelector(
    state => state.booking.booking,
  );
  useEffect(() => {
    if (id <= 0) {
      dispatch(getCartThunk());
    }
  }, [dispatch, id, total_price, cartItems]);
  return (
    <SafeAreaView style={styles.booking}>
      <View style={styles.bookingContainer}>
        <FlatList
          data={cartItems}
          renderItem={() => <BookingBook />}
          keyExtractor={item => `${item}`}
          ListEmptyComponent={
            <Empty
              title={'Your cart is empty'}
              text={
                'Add items to cart to make a purchase. Go to the catalogue no.'
              }
            />
          }
        />
        {cartItems.length > 0 && (
          <View style={styles.bookingTotalBuy}>
            <Text style={globalStyles.textBig}>
              Total: <Text style={globalStyles.textBigBold}>34.98</Text>
            </Text>
            <CustomButton title={'Continue shopping'} />
            <CustomButton title={'Chekout'} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};
