/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { ScrollView, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import HeaderStatusComponent from './components/HeaderStatusComponent';
import HistoryStatusComponent from './components/HistoryStatusComponent';
import ShippingAddressComponent from './components/ShippingAddressComponent';
import PaymentMethodComponent from './components/PaymentMethodComponent';
import OrderHistoryComponent from './components/OrderHistoryComponent';
import ShippingInfoComponent from './components/ShippingInfoComponent';
import { useFocusEffect } from '@react-navigation/native';

const HistoryDetailScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}>
        <HeaderStatusComponent />
        <HistoryStatusComponent />
        <ShippingInfoComponent />
        <ShippingAddressComponent />
        <PaymentMethodComponent />
        <OrderHistoryComponent />
      </ScrollView>
      <View style={{ padding: 16 }}>
        <CustomButton backgroundColor={Colors.blue} text={'BAYAR SEKARANG'} />
      </View>
    </View>
  );
};

export default HistoryDetailScreen;
