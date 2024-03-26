/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const OrderItemComponent = () => {
  return (
    <View>
      <Text style={{ fontSize: 14, color: Colors.black }}>
        GARAM Kurang Natrium 200 gram
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <Text>Rp1.560.000 x 2</Text>
        <Text>Rp3.120.000</Text>
      </View>
    </View>
  );
};

export default OrderItemComponent;
