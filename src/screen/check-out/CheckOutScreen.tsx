/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import OrderComponent from './components/OrderComponent';
import Colors from 'themes/Colors';
import FooterCheckOutComponent from './components/FooterCheckOutComponent';
import { FormProvider, useForm } from 'react-hook-form';
import { checkoutSchema } from './schema/checkoutSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import useCheckout from './service/useCheckout';
import useGetCart from 'screen/cart/service/useGetCart';

export type ShippingOption = {
  name: string;
  price: number;
  etd: string;
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

export type CheckoutForm = {
  shippingOption: ShippingOption;
  paymentMethod: PaymentMethod;
  address: Address;
};

const CheckOutScreen = () => {
  const { loading, checkoutData } = useCheckout();
  const { cartItems } = useGetCart();

  useEffect(() => {
    if (checkoutData) {
      setValue('address', checkoutData.address);
    }
  }, [checkoutData]);

  const formInitialValues: CheckoutForm = {
    shippingOption: null,
    paymentMethod: null,
    address: checkoutData?.address ?? null,
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

        <FooterCheckOutComponent items={checkoutData?.items ?? []} />
      </FormProvider>
    </View>
  );
};

export default CheckOutScreen;
