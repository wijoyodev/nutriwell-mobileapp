/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import ModalOrderCreated, {
  ModalOrderCreatedHandle,
} from './ModalOrderCreated';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { CheckoutForm, ShippingOption } from '../CheckOutScreen';
import { CartItem } from 'screen/cart/CartScreen';
import Utils from 'service/Utils';
import createOrder, { OrderRequest } from 'network/shop/create-order';
import { getUserId } from 'service/StorageUtils';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

export type FooterCheckOutComponentProps = {
  items: CartItem[];
};

const FooterCheckOutComponent: React.FC<FooterCheckOutComponentProps> = ({
  items,
}) => {
  const { handleSubmit: handleFormSubmit, watch } = useFormContext();
  const shippingOption: ShippingOption = watch('shippingOption');
  const shippingPrice = shippingOption?.price ?? 0;
  const [loading, setLoading] = useState<boolean>(false);

  const modalRef = useRef<ModalOrderCreatedHandle | null>();
  const snackbarRef = useRef<CustomSnackbarHandle | null>();

  const getTotalPrice = () => {
    const totalItemPriceList = items.map(item => item.price * item.quantity);
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  const submit: SubmitHandler<any> = async (data: CheckoutForm) => {
    console.log(data);
    const userId = await getUserId();

    const request: OrderRequest = {
      user_id: parseInt(userId, 10),
      cart_id: items?.[0]?.id ?? 0,
      address_shipment_id: data.address?.id ?? 0,
      courier_name: data.shippingOption?.courierName ?? '',
      courier_company: data.shippingOption?.courierCompany ?? '',
      courier_type: data.shippingOption?.courierType ?? '',
      courier_service_name: data.shippingOption?.courierServiceName ?? '',
      courier_rate: data.shippingOption?.price ?? 0,
      shipment_duration_range: data.shippingOption?.shipmentDurationRange ?? '',
      total_purchase: getTotalPrice() + (data.shippingOption?.price ?? 0),
    };

    setLoading(true);
    createOrder(request)
      .then(response => {
        console.log('Request create order: ', request);
        console.log('Response create order:', response);
        setLoading(false);
        if (response.result) {
          modalRef.current?.openModal(response.result.invoice_url);
        } else {
          snackbarRef.current?.showSnackbarError('Terdapat kesalahan');
        }
      })
      .catch(err => {
        console.log('Error: ', err);
        snackbarRef.current?.showSnackbarUnknownError();
      });
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
        loading={loading}
        onPress={handleFormSubmit(submit)}
        backgroundColor={Colors.blue}
        text={'BUAT PESANAN'}
      />

      <ModalOrderCreated ref={el => (modalRef.current = el)} />

      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </View>
  );
};

export default FooterCheckOutComponent;
