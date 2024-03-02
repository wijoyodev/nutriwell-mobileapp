/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import FooterCartComponent from './components/FooterCartComponent';
import ListItemComponent from './components/ListItemComponent';
import { useFocusEffect } from '@react-navigation/native';

export type CartItem = {
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const cartItems: CartItem[] = [
  {
    name: 'GARAM Kurang Natrium 200 gram',
    price: 1560000,
    quantity: 10,
    imageUrl: '',
  },
];

const CartScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      {cartItems.length > 0 ? (
        <>
          <ListItemComponent items={cartItems} />
          <FooterCartComponent />
        </>
      ) : (
        <View
          style={{
            flex: 0.75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/empty-box.png')}
            style={{ height: 100, width: 100, marginBottom: 24 }}
          />
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Belum ada produk dalam keranjang. Yuk, mulai belanja!
          </Text>
        </View>
      )}
    </View>
  );
};

export default CartScreen;
