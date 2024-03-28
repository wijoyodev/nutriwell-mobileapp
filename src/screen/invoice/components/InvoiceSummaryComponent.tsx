/* eslint-disable react-native/no-inline-styles */
import { InvoiceResponse } from 'mock-api/constant';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

export type InvoiceSummaryComponentProps = {
  invoice: InvoiceResponse;
};

const InvoiceSummaryComponent: React.FC<InvoiceSummaryComponentProps> = ({ invoice }) => {
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
          No. Pesanan: 934229034
        </Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text
              style={{ color: Colors.grey2, fontSize: 12, marginBottom: 8 }}>
              TOTAL PEMBAYARAN
            </Text>
            <Text
              style={{ color: Colors.black, fontSize: 14, fontWeight: 'bold' }}>
              Rp3.130.000
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <Text
              style={{ color: Colors.grey2, fontSize: 12, marginBottom: 8 }}>
              WAKTU PEMBAYARAN
            </Text>
            <Text
              style={{ color: Colors.black, fontSize: 14, fontWeight: 'bold' }}>
              03/03/2024
            </Text>
          </View>
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <Text>PENGIRIMAN</Text>

        <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
          {/* {history.shippingAddress.name} */}John Doe
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {/* {history.shippingAddress.phoneNumber} */}(+62) 812312312
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black, lineHeight: 20 }}>
          {/* {history.shippingAddress.streetAddress},{' '}
          {history.shippingAddress.district}, {history.shippingAddress.city},{' '}
          {history.shippingAddress.province}, {history.shippingAddress.postalCode} */}
          Ruko Prominence, Jl. Jalur Sutera Boulevard No.2, Kab Tangerang,
          Banten, ID 12345
        </Text>
      </View>
    </View>
  );
};

export default InvoiceSummaryComponent;
