/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import FooterCartComponent from './components/FooterCartComponent';
import ListItemComponent from './components/ListItemComponent';
import { useFocusEffect } from '@react-navigation/native';
import useGetCart from './service/useGetCart';
import updateCart from 'network/shop/update-cart';
import deleteCart from 'network/shop/delete-cart';

export type CartItem = {
  id: number;
  product_id: number;
  name: string;
  price: number;
  priceAfterTax: number;
  weight: number;
  quantity: number;
  totalPrice: number;
  totalWeight: number;
  imageUrl: string;
};

const CartScreen = () => {
  const { loading, cartItems, refetch } = useGetCart();
  const [items, setItems] = useState<CartItem[]>([]);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (cartItems !== undefined) {
      setItems(cartItems);
    }
  }, [cartItems]);

  useEffect(() => {
    if (success) {
      console.log('Success then refetch');
      refetch();
    }
  }, [success]);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const updateItemQuantity = (cartItem: CartItem, quantity: number) => {
    let newItems = [];
    if (quantity === 0) {
      newItems = items?.filter(item => item.id !== cartItem.id);
    } else {
      newItems =
        items?.map(item => {
          if (item.id === cartItem.id) {
            return {
              ...item,
              quantity,
            };
          }

          return item;
        }) ?? [];
    }

    updateCart(cartItem.id, {
      quantity,
      price: cartItem.price,
      price_after_tax: cartItem.priceAfterTax,
      weight: cartItem.weight,
    }).then(response => {
      if (response.result) {
        setSuccess(true);
      }
    });
    setItems(newItems);
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
    <SafeAreaView
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
    </SafeAreaView>
  );
};

export default CartScreen;
