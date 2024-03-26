/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import Colors from 'themes/Colors';
import InvoiceSummaryComponent from './components/InvoiceSummaryComponent';
import OrderSummaryComponent from './components/OrderSummaryComponent';
import OrderMethodComponent from './components/OrderMethodComponent';
import CustomButton from 'components/CustomButton';

const InvoiceScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <InvoiceSummaryComponent />
      <OrderSummaryComponent />
      <OrderMethodComponent />

      <CustomButton text={'DOWNLOAD'} backgroundColor={Colors.blue} />
    </View>
  );
};

export default InvoiceScreen;
