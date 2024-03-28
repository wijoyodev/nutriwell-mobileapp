/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const OrderMethodComponent = () => {
  return (
    <View style={{ flexDirection: 'row', padding: 16 }}>
      <View style={{ flex: 2 }}>
        <Text style={{ color: Colors.grey2, fontSize: 12 }}>KURIR</Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>JNE Regular</Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ color: Colors.grey2, fontSize: 12 }}>
          METODE PEMBAYARAN
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Transfer Bank</Text>
      </View>
    </View>
  );
};

export default OrderMethodComponent;
