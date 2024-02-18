/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import OrderComponent from './components/OrderComponent';
import SummaryComponent from './components/SummaryComponent';
import Colors from 'themes/Colors';
import FooterCheckOutComponent from './components/FooterCheckOutComponent';

const CheckOutScreen = () => {
  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <OrderComponent />
      <FooterCheckOutComponent />
    </View>
  );
};

export default CheckOutScreen;
