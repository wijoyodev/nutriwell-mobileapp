/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const PaymentMethodComponent = () => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text style={{ marginBottom: 8 }}>METODE PEMBAYARAN</Text>

      <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 8 }}>
        Transfer Bank
      </Text>
      <Text>Dibayar pada 12 Jan 2023 20:26</Text>
    </View>
  );
};

export default PaymentMethodComponent;
