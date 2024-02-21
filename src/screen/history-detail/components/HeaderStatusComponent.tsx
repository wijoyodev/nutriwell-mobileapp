/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const HeaderStatusComponent = () => {
  return (
    <View style={{ padding: 16, backgroundColor: Colors.lightBlue2 }}>
      <Text style={{ fontSize: 14, fontWeight: 'bold', color: Colors.black }}>
        Sedang dikemas
      </Text>
      <Text style={{ fontSize: 14, color: Colors.black, marginTop: 6 }}>
        Produk yang Anda beli sedang dalam dikemas oleh kami.
      </Text>
    </View>
  );
};

export default HeaderStatusComponent;
