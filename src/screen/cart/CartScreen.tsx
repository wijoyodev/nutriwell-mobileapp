/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Colors from 'themes/Colors';
import FooterCartComponent from './components/FooterCartComponent';
import ListItemComponent from './components/ListItemComponent';

const CartScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <ListItemComponent />
      <FooterCartComponent />
    </View>
  );
};

export default CartScreen;
