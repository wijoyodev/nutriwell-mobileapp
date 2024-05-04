import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { ShippingOption } from '../CheckOutScreen';
import calculateCourierRates, {
  CalculateCourierRatesRequest,
  CalculateCourierRatesResponse,
} from 'network/shop/courier-rates';
import { CartItem } from 'screen/cart/CartScreen';

const useGetShippingOption = (postalCode: number, cartItems: CartItem[]) => {
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      const request: CalculateCourierRatesRequest = {
        destination_postal_code: postalCode,
        items: cartItems.map(cartItem => ({
          name: cartItem.name,
          value: cartItem.totalPrice,
          weight: cartItem.totalWeight,
          quantity: cartItem.quantity,
        })),
      };
      calculateCourierRates(request).then(response => {
        setLoading(false);
        setShippingOptions(convertShippingOptions(response.result));
      });

      return () => {
        setShippingOptions([]);
      };
    }, []),
  );

  return { loading, shippingOptions };
};

const convertShippingOptions = (response: CalculateCourierRatesResponse[]) => {
  const shippingOptions: ShippingOption[] = response.map(courier => ({
    name: `${courier.courier_name} ${courier.courier_service_name}`,
    price: courier.price,
    etd: courier.duration,
  }));
  return shippingOptions;
};

export default useGetShippingOption;
