/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import OrderItemComponent from './OrderItemComponent';
import ShippingAddressComponent from './ShippingAddressComponent';
import CustomPicker from 'components/CustomPicker';
import { Controller, useFormContext } from 'react-hook-form';
import { Address, ShippingOption } from '../CheckOutScreen';
import { CartItem } from 'screen/cart/CartScreen';
import useGetShippingOption from '../service/useGetShippingOption';
import Utils from 'service/Utils';

export type OrderComponentProps = {
  items: CartItem[];
  address?: Address;
};

const OrderComponent: React.FC<OrderComponentProps> = ({ address, items }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const { loading, shippingOptions } = useGetShippingOption(
    parseInt(address?.postalCode ?? '0', 10),
    items,
  );

  console.log('Postal Code: ', address?.postalCode);
  console.log('SHIPPING OPTIONS: ', shippingOptions);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: Colors.white,
        flex: 1,
      }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 14, marginBottom: 12, marginTop: 16 }}>
          PESANAN
        </Text>

        <OrderItemComponent items={items} />

        <Text style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
          Alamat Penerima
        </Text>
        <ShippingAddressComponent
          address={address}
          error={errors?.address?.message ?? ''}
        />

        <View style={{ marginBottom: 16 }}>
          <Text
            style={{ marginVertical: 12, fontSize: 14, color: Colors.black }}>
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
                  `${item?.name} (${Utils.getPriceString(item?.price ?? 0)})`
                }
                loading={loading}
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
                      {item?.name} ({Utils.getPriceString(item?.price ?? 0)})
                    </Text>
                    <Text style={{ fontSize: 14 }}>{item?.etd}</Text>
                  </View>
                )}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderComponent;
