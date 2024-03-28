import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { InvoiceResponse } from 'mock-api/constant';
import getInvoice from 'network/shop/invoice';

const useGetInvoice = () => {
  const [invoice, setInvoice] = useState<InvoiceResponse>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getInvoice().then(response => {
        setLoading(false);
        setInvoice(response.data);
      });
    }, []),
  );

  return { loading, invoice };
};

export default useGetInvoice;
