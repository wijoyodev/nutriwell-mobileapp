import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import checkout, { CheckoutResponse } from 'network/shop/checkout';

const useCheckout = () => {
  const [checkoutData, setCheckoutData] = useState<CheckoutResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      checkout().then(response => {
        setLoading(false);
        setCheckoutData(response.data);
      });

      return () => {
        setCheckoutData(undefined);
      };
    }, []),
  );

  return { loading, checkoutData };
};

export default useCheckout;
