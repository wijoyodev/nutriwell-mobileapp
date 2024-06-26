import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getOrderHistoryDetail from 'network/shop/order-history-detail';
import getDisbursementBank from 'network/reward/disbursement-bank';
import { BankOption } from '../BankAccountScreen';

const useGetBankOptions = () => {
  const [bankOptions, setBankOptions] = useState<BankOption[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [fetched, setFetched] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getDisbursementBank().then(response => {
        setLoading(false);
        setBankOptions(
          response.result
            .filter(item => item.can_disburse)
            .map(item => ({
              name: item.name,
              code: item.code,
            })),
        );
        setFetched(true);
      });
    }, []),
  );

  return { loading, bankOptions, fetched };
};

export default useGetBankOptions;
