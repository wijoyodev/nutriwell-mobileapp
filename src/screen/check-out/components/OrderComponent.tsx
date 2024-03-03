/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import OrderItemComponent from './OrderItemComponent';
import ShippingAddressComponent from './ShippingAddressComponent';
import CustomTextInput from 'components/CustomTextInput';
import SummaryComponent from './SummaryComponent';
import CustomPicker from 'components/CustomPicker';

export type ShippingOption = {
  name: string;
  price: number;
  minEtd: number;
  maxEtd: number;
  etdType: string;
};

const shippingOptions: ShippingOption[] = [
  {
    name: 'JNE',
    price: 10000,
    minEtd: 2,
    maxEtd: 3,
    etdType: 'days',
  },
  {
    name: 'Sicepat',
    price: 10000,
    minEtd: 2,
    maxEtd: 3,
    etdType: 'days',
  },
];

const OrderComponent = () => {
  const [shippingOption, setShippingOption] = useState('');
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

        <Text style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
          Alamat Penerima
        </Text>
        <ShippingAddressComponent />

        <Text style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
          Pengiriman
        </Text>
        <CustomPicker
          items={shippingOptions}
          title={'Pilih Pengiriman'}
          placeholder="Masukkan metode pengiriman"
          value={shippingOption}
          onSelect={(item: ShippingOption) => setShippingOption(item.name)}
          renderOption={(item: ShippingOption) => (
            <View
              style={{
                paddingVertical: 8,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{ color: Colors.black, fontSize: 14 }}>
                {item.name} (Rp{item.price})
              </Text>
              <Text style={{ fontSize: 14 }}>
                {item.minEtd}-{item.maxEtd} {item.etdType}
              </Text>
            </View>
          )}
        />

        <Text style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
          Metode Pembayaran
        </Text>
        <CustomTextInput placeholder="Masukkan metode pengiriman" />

        <Text style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
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
