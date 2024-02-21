/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const ShippingAddressComponent = () => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text style={{ marginBottom: 8 }}>ALAMAT PENGIRIMAN</Text>

      <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
        John Doe
      </Text>
      <Text style={{ fontSize: 14, color: Colors.black }}>08123123</Text>
      <Text style={{ fontSize: 14, color: Colors.black }}>
        Ruko Prominence, Jl. Jalur Sutera Boulevard No.2, Kab Tangerang, 12345
      </Text>
    </View>
  );
};

export default ShippingAddressComponent;
