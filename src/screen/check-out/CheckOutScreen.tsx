/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import OrderComponent from './components/OrderComponent';
import SummaryComponent from './components/SummaryComponent';
import Colors from 'themes/Colors';
import FooterCheckOutComponent from './components/FooterCheckOutComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { checkoutSchema } from './schema/checkoutSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { CartItem } from 'screen/cart/CartScreen';

export type ShippingOption = {
  name: string;
  price: number;
  minEtd: number;
  maxEtd: number;
  etdType: string;
} | null;

export type PaymentMethod = {
  name: string;
} | null;

export type Address = {
  name: string;
  phoneNumber: string;
  province: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
} | null;

const address: Address = {
  name: 'Yahya',
  phoneNumber: '+628127312',
  province: 'Jawa Barat',
  city: 'Bekasi',
  district: 'Cikarang Utara',
  streetAddress: 'Jl. Kesejahteraan no.1',
  postalCode: '17530',
};

export type CheckoutForm = {
  shippingOption: ShippingOption;
  paymentMethod: PaymentMethod;
  address: Address;
};

const cartItems: CartItem[] = [
  {
    id: '1',
    name: 'GARAM Kurang Natrium 200 gram',
    price: 10000,
    quantity: 11,
    imageUrl: '',
  },
  {
    id: '2',
    name: 'GARAM Kurang Natrium 200 gram',
    price: 20000,
    quantity: 2,
    imageUrl: '',
  },
];

const CheckOutScreen = () => {
  const formInitialValues: CheckoutForm = {
    shippingOption: null,
    paymentMethod: null,
    address: address,
  };

  const formMethods = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <FormProvider {...formMethods}>
        <OrderComponent items={cartItems} />
        <FooterCheckOutComponent items={cartItems} />
      </FormProvider>
    </View>
  );
};

export default CheckOutScreen;
