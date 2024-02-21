/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const ShippingInfoComponent = () => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>INFORMASI PENGIRIMAN</Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.blue }}>
          Lacak
        </Text>
      </View>

      <Text style={{ fontSize: 14, color: Colors.black, marginVertical: 8 }}>
        JNE Regular
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        No. Resi: 032483294203942
      </Text>
      <Text style={{ fontSize: 12, color: Colors.black }}>
        Terkirim pada 13 Jan 2023 20:26
      </Text>
    </View>
  );
};

export default ShippingInfoComponent;
