/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, ListRenderItemInfo, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Utils from 'service/Utils';
import { HistoryItem } from 'screen/order-history/service/useGetOrderHistory';
import { HistoryDetail } from '../service/useGetHistoryDetail';

export type OrderHistoryComponentProps = {
  history: HistoryDetail;
  tax: number;
};

const OrderHistoryComponent: React.FC<OrderHistoryComponentProps> = ({
  history,
  tax,
}) => {
  const renderItem = (info: ListRenderItemInfo<HistoryItem>) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          marginTop: info.index > 0 ? 12 : 0,
        }}>
        <Image
          source={{
            uri: info.item.imageUrl,
          }}
          style={{
            height: 70,
            width: 70,
            borderRadius: 8,
          }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            {info.item.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 6,
            }}>
            <Text style={{ fontSize: 14 }}>
              {Utils.getPriceString(info.item.priceAfterTax)} x{' '}
              {info.item.quantity}
            </Text>
            <Text
              style={{
                color: Colors.darkBlue,
                fontSize: 14,
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

  const getTotalQuantity = () => {
    const totalItemPriceList = history.items.map(item => item.quantity);
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  const getTotalPrice = () => {
    const totalItemPriceList = history.items.map(
      item => item.price * item.quantity,
    );
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  const getTotalTax = () => {
    const totalItemPriceList = history.items.map(
      item => (item.priceAfterTax - item.price) * item.quantity,
    );
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text>PESANAN ANDA</Text>

      <View
        style={{
          borderColor: Colors.grey,
          borderWidth: 1,
          borderRadius: 16,
          padding: 12,
          marginTop: 12,
        }}>
        <FlatList data={history.items} renderItem={renderItem} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          Subtotal ({getTotalQuantity()} produk)
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {Utils.getPriceString(getTotalPrice())}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          PPN {tax * 100}%
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {Utils.getPriceString(getTotalTax())}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Ongkir</Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {Utils.getPriceString(history.shipping.price)}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: Colors.grey,
          marginTop: 16,
          paddingTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Total</Text>
        <Text
          style={{ color: Colors.darkBlue, fontSize: 14, fontWeight: 'bold' }}>
          {Utils.getPriceString(history.totalPurchaseAfterTax)}
        </Text>
      </View>
    </View>
  );
};

export default OrderHistoryComponent;
