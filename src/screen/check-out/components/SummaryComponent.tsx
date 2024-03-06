/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const SummaryComponent = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderTopWidth: 4,
        borderTopColor: Colors.grey,
        marginBottom: 12,
      }}>
      <Text style={{ fontSize: 12, marginBottom: 12 }}>RINGKASAN PESANAN</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          Subtotal (20 produk)
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>Rp3.200.000</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Ongkir</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>Rp0</Text>
      </View>
    </View>
  );
};

export default SummaryComponent;
