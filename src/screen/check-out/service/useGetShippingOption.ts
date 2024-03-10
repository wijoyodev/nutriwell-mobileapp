import { useFocusEffect } from '@react-navigation/native';
import getShippingOption from 'network/shop/shipping-option';
import { useCallback, useState } from 'react';
import { ShippingOption } from '../CheckOutScreen';

const useGetShippingOption = () => {
  const [shippingOptions, setShippingOptions] = useState<ShippingOption[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getShippingOption().then(response => {
        setLoading(false);
        setShippingOptions(response.data);
      });

      return () => {
        setShippingOptions([]);
      };
    }, []),
  );

  return { loading, shippingOptions };
};

export default useGetShippingOption;
