/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const OrderItemComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
        GARAM Kurang Natrium 200 gram
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: Colors.grey2 }}>
          Rp1.560.000 x 2
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
          Rp3.120.000
        </Text>
      </View>
    </View>
  );
};

export default OrderItemComponent;
