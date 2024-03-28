/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import OrderItemComponent from './OrderItemComponent';
import Colors from 'themes/Colors';

const OrderSummaryComponent = () => {
  const renderItem = (info: ListRenderItemInfo) => {
    return <OrderItemComponent />;
  };

  return (
    <View>
      <View
        style={{
          padding: 16,
          borderBottomColor: Colors.grey,
          borderBottomWidth: 1,
        }}>
        <Text>RINCIAN PESANAN</Text>

        <FlatList data={['']} renderItem={renderItem} />
      </View>
      <View
        style={{
          padding: 16,
          borderBottomColor: Colors.grey,
          borderBottomWidth: 1,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            Subtotal (2 produk)
          </Text>
          <Text style={{ fontSize: 14, color: Colors.black }}>Rp3.120.000</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, color: Colors.black }}>Ongkir</Text>
          <Text style={{ fontSize: 14, color: Colors.black }}>Rp10.000</Text>
        </View>
      </View>
      <View
        style={{
          padding: 16,
          borderBottomColor: Colors.grey,
          borderBottomWidth: 6,
        }}>
        <View>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            Total Pembayaran
          </Text>
          <Text
            style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
            Rp3.130.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSummaryComponent;
