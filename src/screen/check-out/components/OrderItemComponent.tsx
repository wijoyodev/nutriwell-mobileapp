/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, ListRenderItemInfo, Text, View } from 'react-native';
import { CartItem } from 'screen/cart/CartScreen';
import Utils from 'service/Utils';
import Colors from 'themes/Colors';

export type OrderItemComponentProps = {
  items: CartItem[];
};

const OrderItemComponent: React.FC<OrderItemComponentProps> = ({ items }) => {
  const renderItem = (info: ListRenderItemInfo<CartItem>) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          marginTop: info.index > 0 ? 12 : 0,
        }}>
        <Image
          source={{
            uri: info.item.imageUrl,
          }}
          style={{ height: 70, width: 70, borderRadius: 8 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            {info.item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 4,
            }}>
            <Text style={{ fontSize: 14 }}>
              {Utils.getPriceString(info.item.priceAfterTax)} x{' '}
              {info.item.quantity}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.darkBlue,
                fontWeight: 'bold',
              }}>
              {Utils.getPriceString(
                info.item.priceAfterTax * info.item.quantity,
              )}
            </Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
      }}>
      <FlatList data={items} renderItem={renderItem} />
    </View>
  );
};

export default OrderItemComponent;
