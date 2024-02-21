/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import { HistoryItem } from '../OrderHistoryScreen';
import Colors from 'themes/Colors';

export type HistoryItemProps = {
  item: HistoryItem;
};

const HistoryItemComponent: React.FC<HistoryItemProps> = ({ item }) => {
  return (
    <View
      style={{
        marginTop: 12,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../assets/images/product_image.png')}
        style={{ height: 70, width: 70, borderRadius: 8 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>{item.name}</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 8,
          }}>
          <Text style={{ fontSize: 14 }}>{item.quantity} produk</Text>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            Rp{item.quantity * item.price}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryItemComponent;
