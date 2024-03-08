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
import { HistoryItem } from 'screen/order-history/OrderHistoryScreen';

type ShippingInfo = {
  name: string;
  resi: string;
  date: Date;
  etdDate: Date;
  price: number;
};

type ShippingAddress = {
  name: string;
  phoneNumber: string;
  province: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
};

type PaymentInfo = {
  name: string;
  date: Date;
};

export type HistoryDetail = {
  orderId: string;
  createdDate: Date;
  status: number;
  items: HistoryItem[];
  shipping: ShippingInfo;
  shippingAddress: ShippingAddress;
  payment: PaymentInfo;
};

const history: HistoryDetail = {
  orderId: '934229034',
  createdDate: new Date(),
  status: 0,
  items: [
    {
      name: 'GARAM Kurang Natrium 200 gram',
      quantity: 20,
      price: 1250000,
      imageUrl: '',
    },
  ],
  shipping: {
    name: 'JNE',
    resi: '',
    date: new Date(),
    etdDate: new Date(),
    price: 10000,
  },
  shippingAddress: {
    name: 'Yahya',
    phoneNumber: '(+62) 123712361',
    province: 'Jawa Barat',
    city: 'Bekasi',
    district: 'Cikarang Utara',
    streetAddress: 'Jl. Kesejahteraan',
    postalCode: '17530',
  },
  payment: {
    name: 'Transfer Bank',
    date: new Date(),
  },
};

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
        <HeaderStatusComponent history={history} />
        <HistoryStatusComponent history={history} />
        <ShippingInfoComponent history={history} />
        <ShippingAddressComponent history={history} />
        <PaymentMethodComponent history={history} />
        <OrderHistoryComponent history={history} />
      </ScrollView>
      <View style={{ padding: 16 }}>
        <CustomButton backgroundColor={Colors.blue} text={'BAYAR SEKARANG'} />
      </View>
    </View>
  );
};

export default HistoryDetailScreen;
