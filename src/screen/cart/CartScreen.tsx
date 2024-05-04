/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import FooterCartComponent from './components/FooterCartComponent';
import ListItemComponent from './components/ListItemComponent';
import { useFocusEffect } from '@react-navigation/native';
import useGetCart from './service/useGetCart';
import addToCart from 'network/shop/add-to-cart';

export type CartItem = {
  id: number;
  product_id: number;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  totalWeight: number;
  imageUrl: string;
};

const CartScreen = () => {
  const { loading, cartItems, refetch } = useGetCart();
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    if (cartItems !== undefined) {
      setItems(cartItems);
    }
  }, [cartItems]);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const updateItemQuantity = async (product_id: number, quantity: number) => {
    const newItems =
      items?.map(item => {
        if (item.product_id === product_id) {
          return {
            ...item,
            quantity,
          };
        }

        return item;
      }) ?? [];
    setItems(newItems);
    await addToCart({
      product_id,
      quantity,
    });
    refetch();
  };

  const renderEmpty = () => {
    return (
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
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      {loading && <ActivityIndicator size={'large'} color={Colors.blue} />}
      {(cartItems?.length ?? 0) > 0 ? (
        <>
          <ListItemComponent
            items={items}
            updateItemQuantity={updateItemQuantity}
          />
          <FooterCartComponent items={items} />
        </>
      ) : (
        renderEmpty()
      )}
    </View>
  );
};

export default CartScreen;
