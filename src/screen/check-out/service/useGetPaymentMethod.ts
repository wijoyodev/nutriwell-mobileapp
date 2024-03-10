import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { PaymentMethod } from '../CheckOutScreen';
import getPaymentMethod from 'network/shop/payment-method';

const useGetPaymentMethod = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getPaymentMethod().then(response => {
        setLoading(false);
        setPaymentMethods(response.data);
      });

      return () => {
        setPaymentMethods([]);
      };
    }, []),
  );

  return { loading, paymentMethods };
};

export default useGetPaymentMethod;
