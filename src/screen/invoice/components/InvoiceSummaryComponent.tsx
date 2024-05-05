/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { Invoice } from '../InvoiceScreen';
import Utils from 'service/Utils';
import dayjs from 'dayjs';

export type InvoiceSummaryComponentProps = {
  invoice: Invoice;
};

const InvoiceSummaryComponent: React.FC<InvoiceSummaryComponentProps> = ({
  invoice,
}) => {
  return (
    <View style={{ borderBottomWidth: 6, borderBottomColor: Colors.grey }}>
      <View
        style={{
          padding: 16,
          borderBottomWidth: 1,
          borderBottomColor: '#E7E7E7',
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            fontWeight: 'bold',
            marginBottom: 16,
          }}>
          No. Pesanan: {invoice.orderId}
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text
              style={{ color: Colors.grey2, fontSize: 12, marginBottom: 8 }}>
              TOTAL PEMBAYARAN
            </Text>
            <Text
              style={{ color: Colors.black, fontSize: 14, fontWeight: 'bold' }}>
              {Utils.getPriceString(invoice.totalPayment)}
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text
              style={{ color: Colors.grey2, fontSize: 12, marginBottom: 8 }}>
              WAKTU PEMBAYARAN
            </Text>
            <Text
              style={{ color: Colors.black, fontSize: 14, fontWeight: 'bold' }}>
              {dayjs(invoice.paymentDate).format('DD/MM/YYYY')}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <Text>PENGIRIMAN</Text>

        <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
          {invoice?.shippingAddress?.name}
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {invoice?.shippingAddress?.phoneNumber}
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black, lineHeight: 20 }}>
          {invoice?.shippingAddress?.streetAddress},{' '}
          {invoice?.shippingAddress?.district}, {invoice?.shippingAddress?.city}
          , {invoice?.shippingAddress?.province},{' '}
          {invoice?.shippingAddress?.postalCode}
        </Text>
      </View>
    </View>
  );
};

export default InvoiceSummaryComponent;
