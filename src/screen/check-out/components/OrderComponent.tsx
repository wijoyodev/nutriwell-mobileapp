/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import OrderItemComponent from './OrderItemComponent';
import ShippingAddressComponent from './ShippingAddressComponent';
import SummaryComponent from './SummaryComponent';
import CustomPicker from 'components/CustomPicker';
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from 'react-hook-form';
import { PaymentMethod, ShippingOption } from '../CheckOutScreen';

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

const paymentList: PaymentMethod[] = [
  {
    name: 'Transfer Bank (BCA)',
  },
  {
    name: 'E-Wallet',
  },
  {
    name: 'Virtual Account',
  },
];

const OrderComponent = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useFormContext();
  const address = watch('address');

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
        <ShippingAddressComponent
          address={address}
          error={errors?.address?.message ?? ''}
        />

        <Text style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
          Pengiriman
        </Text>
        <Controller
          control={control}
          name={'shippingOption'}
          render={({ field: { onChange, value } }) => (
            <CustomPicker
              items={shippingOptions}
              title={'Pilih Pengiriman'}
              placeholder="Pilih pengiriman"
              value={value}
              renderValue={(item: ShippingOption) =>
                `${item?.name} (Rp${item?.price})`
              }
              error={errors?.shippingOption?.message ?? ''}
              onSelect={onChange}
              renderOption={(item: ShippingOption) => (
                <View
                  style={{
                    paddingVertical: 8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{ color: Colors.black, fontSize: 14 }}>
                    {item?.name} (Rp{item?.price})
                  </Text>
                  <Text style={{ fontSize: 14 }}>
                    {item?.minEtd}-{item?.maxEtd} {item?.etdType}
                  </Text>
                </View>
              )}
            />
          )}
        />

        <View style={{ marginBottom: 16 }}>
          <Text
            style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
            Metode Pembayaran
          </Text>
          <Controller
            control={control}
            name={'paymentMethod'}
            render={({ field: { onChange, value } }) => (
              <CustomPicker
                value={value}
                items={paymentList}
                onSelect={onChange}
                error={errors?.paymentMethod?.message ?? ''}
                renderValue={(item: PaymentMethod) => item?.name}
                renderOption={(item: PaymentMethod) => (
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 14,
                      paddingVertical: 8,
                    }}>
                    {item?.name}
                  </Text>
                )}
                title="Pilih metode pembayaran"
                placeholder="Pilih metode pembayaran"
              />
            )}
          />
        </View>
      </View>

      <SummaryComponent />
    </ScrollView>
  );
};

export default OrderComponent;
