/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import FooterCartComponent from './components/FooterCartComponent';
import ListItemComponent from './components/ListItemComponent';
import { useFocusEffect } from '@react-navigation/native';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'GARAM Kurang Natrium 200 gram',
    price: 10000,
    quantity: 11,
    imageUrl: '',
  },
  {
    id: '2',
    name: 'GARAM Kurang Natrium 100 gram',
    price: 5000,
    quantity: 2,
    imageUrl: '',
  },
];

const CartScreen = () => {
  const [items, setItems] = useState(cartItems);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const updateItemQuantity = (id: string, quantity: number) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity,
        };
      }

      return item;
    });
    setItems(newItems);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      {cartItems.length > 0 ? (
        <>
          <ListItemComponent
            items={items}
            updateItemQuantity={updateItemQuantity}
          />
          <FooterCartComponent items={items} />
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
