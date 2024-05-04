import { useFocusEffect } from '@react-navigation/native';
import getBankAccount, { BankResponse } from 'network/auth/bank-account';
import { useCallback, useState } from 'react';

export type BankInfo = {
  account_bank: string;
  account_bank_number: string;
  account_bank_name: string;
};

const useGetBankAccount = () => {
  const [bankAccount, setBankAccount] = useState<BankInfo>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getBankAccount().then(response => {
        setLoading(false);
        const bankAccountInfo: BankInfo = {
          account_bank: response.result.data?.[0].account_bank,
          account_bank_name: response.result.data?.[0].account_bank_name,
          account_bank_number: response.result.data?.[0].account_bank_number,
        };
        setBankAccount(bankAccountInfo);
      });
    }, []),
  );

  return { loading, bankAccount };
};

export default useGetBankAccount;
