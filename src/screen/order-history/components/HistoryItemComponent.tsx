/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Utils from 'service/Utils';
import { HistoryItem } from '../service/useGetOrderHistory';

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
        source={{
          uri: item.imageUrl,
        }}
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
            {Utils.getPriceString(item.quantity * item.priceAfterTax)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryItemComponent;
