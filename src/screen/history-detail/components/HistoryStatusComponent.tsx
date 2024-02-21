/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const HistoryStatusComponent = () => {
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>No. Pesanan</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>#934229034</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Waktu Pesanan</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          08 Jan 2024 08:42
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Status</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>Dikemas</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Invoice</Text>
        <Text style={{ fontSize: 14, color: Colors.blue, fontWeight: 'bold' }}>
          Lihat Invoice
        </Text>
      </View>
    </View>
  );
};

export default HistoryStatusComponent;
