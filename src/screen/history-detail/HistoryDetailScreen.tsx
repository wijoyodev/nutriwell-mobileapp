/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { ActivityIndicator, ScrollView, StatusBar, View } from 'react-native';
import Colors from 'themes/Colors';
import HeaderStatusComponent from './components/HeaderStatusComponent';
import HistoryStatusComponent from './components/HistoryStatusComponent';
import ShippingAddressComponent from './components/ShippingAddressComponent';
import PaymentMethodComponent from './components/PaymentMethodComponent';
import OrderHistoryComponent from './components/OrderHistoryComponent';
import ShippingInfoComponent from './components/ShippingInfoComponent';
import { useFocusEffect } from '@react-navigation/native';
import { HistoryItem } from 'screen/order-history/OrderHistoryScreen';
import useGetHistoryDetail from './service/useGetHistoryDetail';

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
  approvedDate?: Date;
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

const HistoryDetailScreen = () => {
  const { historyDetail: history, loading } = useGetHistoryDetail();
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
        {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
        {history !== undefined && (
          <>
            <HeaderStatusComponent history={history} />
            <HistoryStatusComponent history={history} />
            <ShippingInfoComponent history={history} />
            <ShippingAddressComponent history={history} />
            <PaymentMethodComponent history={history} />
            <OrderHistoryComponent history={history} />
          </>
        )}
      </ScrollView>
      <View style={{ padding: 16, paddingTop: 0 }}>
        {(history?.status ?? -1) === 0 && (
          <CustomButton backgroundColor={Colors.blue} text={'BAYAR SEKARANG'} />
        )}
      </View>
    </View>
  );
};

export default HistoryDetailScreen;
