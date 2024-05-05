/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { HistoryItem } from 'screen/order-history/service/useGetOrderHistory';
import Utils from 'service/Utils';
import Colors from 'themes/Colors';

type OrderItemComponentProps = {
  item: HistoryItem;
};

const OrderItemComponent: React.FC<OrderItemComponentProps> = ({ item }) => {
  return (
    <View>
      <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
        {item.name}
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: Colors.grey2 }}>
          {Utils.getPriceString(item.price)} x {item.quantity}
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
          {Utils.getPriceString(item.totalPrice)}
        </Text>
      </View>
    </View>
  );
};

export default OrderItemComponent;
