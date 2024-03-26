/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import OrderItemComponent from './OrderItemComponent';

const OrderSummaryComponent = () => {
  const renderItem = (info: ListRenderItemInfo) => {
    return <OrderItemComponent />;
  };

  return (
    <View>
      <View style={{ padding: 16 }}>
        <Text>RINCIAN PESANAN</Text>

        <FlatList data={[]} renderItem={renderItem} />
      </View>
      <View>
        <View>
          <Text>Subtotal (2 produk)</Text>
          <Text>Rp3.120.000</Text>
        </View>
        <View>
          <Text>Ongkir</Text>
          <Text>Rp10.000</Text>
        </View>
      </View>
      <View>
        <View>
          <Text>Total Pembayaran</Text>
          <Text>Rp3.130.000</Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSummaryComponent;
