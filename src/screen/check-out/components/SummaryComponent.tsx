/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Text, View } from 'react-native';
import { CartItem } from 'screen/cart/CartScreen';
import Utils from 'service/Utils';
import Colors from 'themes/Colors';
import { ShippingOption } from '../CheckOutScreen';

export type SummaryComponentProps = {
  items: CartItem[];
};

const SummaryComponent: React.FC<SummaryComponentProps> = ({ items }) => {
  const { watch } = useFormContext();
  const shippingOption: ShippingOption = watch('shippingOption');
  const shippingPrice = shippingOption?.price ?? 0;

  const getTotalPrice = () => {
    const totalItemPriceList = items.map(item => item.price * item.quantity);
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  const getTotalQuantity = () => {
    const totalItemPriceList = items.map(item => item.quantity);
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingTop: 16,
        borderTopWidth: 4,
        borderTopColor: Colors.grey,
        marginBottom: 12,
      }}>
      <Text style={{ fontSize: 12, marginBottom: 12 }}>RINGKASAN PESANAN</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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
          marginTop: 8,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Ongkir</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {Utils.getPriceString(shippingPrice)}
        </Text>
      </View>
    </View>
  );
};

export default SummaryComponent;
