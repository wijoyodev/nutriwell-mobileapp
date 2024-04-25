import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { HistoryDetail } from '../HistoryDetailScreen';
import getOrderHistoryDetail from 'network/shop/order-history-detail';

const useGetHistoryDetail = () => {
  const [historyDetail, setHistoryDetail] = useState<HistoryDetail>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getOrderHistoryDetail().then(response => {
        setLoading(false);
        setHistoryDetail(response.data);
      });
    }, []),
  );

  return { loading, historyDetail };
};

export default useGetHistoryDetail;
