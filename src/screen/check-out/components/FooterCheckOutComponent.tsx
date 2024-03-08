/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import ModalOrderCreated, {
  ModalOrderCreatedHandle,
} from './ModalOrderCreated';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { CheckoutForm, ShippingOption } from '../CheckOutScreen';
import { CartItem } from 'screen/cart/CartScreen';
import Utils from 'service/Utils';

export type FooterCheckOutComponentProps = {
  items: CartItem[];
};

const FooterCheckOutComponent: React.FC<FooterCheckOutComponentProps> = ({ items }) => {
  const { handleSubmit: handleFormSubmit, watch } = useFormContext();
  const shippingOption: ShippingOption = watch('shippingOption');
  const shippingPrice = shippingOption?.price ?? 0;

  const modalRef = useRef<ModalOrderCreatedHandle | null>();

  const getTotalPrice = () => {
    const totalItemPriceList = items.map(item => item.price * item.quantity);
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  const submit: SubmitHandler<CheckoutForm> = (data: CheckoutForm) => {
    console.log(data);
    modalRef.current?.openModal();
  };

  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopColor: Colors.grey,
        borderTopWidth: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Total</Text>
        <Text
          style={{ fontSize: 14, color: Colors.darkBlue, fontWeight: 'bold' }}>
          {Utils.getPriceString(getTotalPrice() + shippingPrice)}
        </Text>
      </View>

      <CustomButton
        onPress={handleFormSubmit(submit)}
        backgroundColor={Colors.blue}
        text={'BUAT PESANAN'}
      />

      <ModalOrderCreated ref={el => (modalRef.current = el)} />
    </View>
  );
};

export default FooterCheckOutComponent;
