/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StatusBar, View } from 'react-native';
import Colors from 'themes/Colors';
import FooterCartComponent from './components/FooterCartComponent';
import ListItemComponent from './components/ListItemComponent';
import { useFocusEffect } from '@react-navigation/native';

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
      <ListItemComponent />
      <FooterCartComponent />
    </View>
  );
};

export default CartScreen;
