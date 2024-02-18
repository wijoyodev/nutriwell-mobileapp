/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import OrderItemComponent from './OrderItemComponent';
import ShippingAddressComponent from './ShippingAddressComponent';
import CustomTextInput from 'components/CustomTextInput';
import SummaryComponent from './SummaryComponent';

const OrderComponent = () => {
  return (
    <ScrollView
      style={{
        backgroundColor: Colors.white,
        flex: 1,
      }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 14, marginBottom: 12, marginTop: 16 }}>
          PESANAN
        </Text>

        <OrderItemComponent />

        <Text style={{ marginVertical: 12, fontSize: 14 }}>
          Alamat Penerima
        </Text>
        <ShippingAddressComponent />

        <Text style={{ marginVertical: 12, fontSize: 14 }}>Pengiriman</Text>
        <CustomTextInput placeholder="Masukkan metode pengiriman" />

        <Text style={{ marginVertical: 12, fontSize: 14 }}>
          Metode Pembayaran
        </Text>
        <CustomTextInput placeholder="Masukkan metode pengiriman" />

        <Text style={{ marginVertical: 12, fontSize: 14 }}>
          Metode Pembayaran
        </Text>
        <CustomTextInput
          containerStyle={{
            marginBottom: 16,
          }}
          placeholder="Masukkan metode pengiriman"
        />
      </View>

      <SummaryComponent />
    </ScrollView>
  );
};

export default OrderComponent;
