/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import OrderItemComponent from './OrderItemComponent';
import Colors from 'themes/Colors';
import { Invoice } from '../InvoiceScreen';
import { HistoryItem } from 'screen/order-history/service/useGetOrderHistory';
import Utils from 'service/Utils';

type OrderSummaryComponentProps = {
  invoice: Invoice;
};

const OrderSummaryComponent: React.FC<OrderSummaryComponentProps> = ({
  invoice,
}) => {
  const renderItem = (info: ListRenderItemInfo<HistoryItem>) => {
    return <OrderItemComponent item={info.item} />;
  };

  const getTotalQuantity = () => {
    const totalItemQtyList = invoice?.items?.map(item => item.quantity) ?? [];
    return totalItemQtyList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  const getTotalPrice = () => {
    const totalItemPriceList =
      invoice?.items?.map(item => item.price * item.quantity) ?? [];
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  return (
    <View>
      <View
        style={{
          padding: 16,
          borderBottomColor: Colors.grey,
          borderBottomWidth: 1,
        }}>
        <Text style={{ marginBottom: 4 }}>RINCIAN PESANAN</Text>

        <FlatList data={invoice?.items ?? []} renderItem={renderItem} />
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
            Subtotal ({getTotalQuantity()} produk)
          </Text>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            {Utils.getPriceString(getTotalPrice())}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            PPN {invoice.tax * 100}%
          </Text>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            {Utils.getPriceString(getTotalPrice() * invoice.tax)}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 14, color: Colors.black }}>Ongkir</Text>
          <Text style={{ fontSize: 14, color: Colors.black }}>
            {Utils.getPriceString(invoice.shippingCost)}
          </Text>
        </View>
      </View>
      <View
        style={{
          padding: 16,
          borderBottomColor: Colors.grey,
          borderBottomWidth: 6,
        }}>
        <View>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 4 }}>
            Total Pembayaran
          </Text>
          <Text
            style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
            {Utils.getPriceString(invoice.totalPayment)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderSummaryComponent;
