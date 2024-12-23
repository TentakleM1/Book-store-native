import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {CustomButton} from 'src/components/CustomButton/CustomButton';
import {Empty} from 'src/components/Empty/Empty';
import globalStyles from 'src/styles/global.style';
import {styles} from './Booking.styles';
import {useAppSelector} from 'src/store/store';
import {BookingBook} from './components/BookingBook/BookingBook';

export const BookingScreen: React.FC = () => {
  const {id, total_price, cartItems} = useAppSelector(
    state => state.booking.booking,
  );
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
        {cartItems.lenth > 0 && (
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
