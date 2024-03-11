import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getOrderHistory from 'network/shop/order-history';
import { OrderHistory } from '../OrderHistoryScreen';

const useGetOrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState<OrderHistory[]>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getOrderHistory().then(response => {
        setLoading(false);
        setOrderHistory(response.data);
      });
    }, []),
  );

  return { loading, orderHistory };
};

export default useGetOrderHistory;
