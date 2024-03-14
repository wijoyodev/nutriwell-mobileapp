import { useFocusEffect } from '@react-navigation/native';
import getBankAccount, { BankResponse } from 'network/auth/bank-account';
import { useCallback, useState } from 'react';

const useGetBankAccount = () => {
  const [bankAccount, setBankAccount] = useState<BankResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getBankAccount().then(response => {
        setLoading(false);
        setBankAccount(response.data);
      });
    }, []),
  );

  return { loading, bankAccount };
};

export default useGetBankAccount;
