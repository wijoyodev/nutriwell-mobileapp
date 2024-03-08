/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryDetail } from '../HistoryDetailScreen';

export type ShippingAddressComponentProps = {
  history: HistoryDetail;
};

const ShippingAddressComponent: React.FC<ShippingAddressComponentProps> = ({
  history,
}) => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text style={{ marginBottom: 8 }}>ALAMAT PENGIRIMAN</Text>

      <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
        {history.shippingAddress.name}
      </Text>
      <Text style={{ fontSize: 14, color: Colors.black }}>
        {history.shippingAddress.phoneNumber}
      </Text>
      <Text style={{ fontSize: 14, color: Colors.black, lineHeight: 20 }}>
        {history.shippingAddress.streetAddress},{' '}
        {history.shippingAddress.district}, {history.shippingAddress.city},{' '}
        {history.shippingAddress.province}, {history.shippingAddress.postalCode}
      </Text>
    </View>
  );
};

export default ShippingAddressComponent;
