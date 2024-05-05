/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import OrderComponent from './components/OrderComponent';
import Colors from 'themes/Colors';
import FooterCheckOutComponent from './components/FooterCheckOutComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { checkoutSchema } from './schema/checkoutSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import useGetCart from 'screen/cart/service/useGetCart';
import useGetAddress from './service/useGetAddress';

export type ShippingOption = {
  name: string;
  courierName: string;
  courierCompany: string;
  courierType: string;
  courierServiceName: string;
  price: number;
  etd: string;
} | null;

export type Address = {
  id: number;
  name: string;
  phoneNumber: string;
  code: string;
  province: string;
  city: string;
  district: string;
  streetAddress: string;
  postalCode: string;
} | null;

export type CheckoutForm = {
  shippingOption: ShippingOption;
  address: Address;
};

const CheckOutScreen = () => {
  // const { loading, checkoutData } = useCheckout();
  const { address } = useGetAddress();
  const { loading, cartItems } = useGetCart();

  useEffect(() => {
    if (address) {
      setValue('address', address);
    }
  }, [address]);

  const formInitialValues: CheckoutForm = {
    shippingOption: null,
    address: address ?? null,
  };

  const formMethods = useForm({
    resolver: yupResolver(checkoutSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const { setValue } = formMethods;

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <FormProvider {...formMethods}>
        {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
        {cartItems !== undefined ? (
          <OrderComponent items={cartItems ?? []} />
        ) : (
          <View style={{ flex: 1 }} />
        )}

        <FooterCheckOutComponent items={cartItems ?? []} />
      </FormProvider>
    </View>
  );
};

export default CheckOutScreen;
