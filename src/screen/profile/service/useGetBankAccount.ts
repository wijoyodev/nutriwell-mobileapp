import { useFocusEffect } from '@react-navigation/native';
import getUserById from 'network/auth/user-by-id';
import getBankAccount from 'network/auth/user-by-id';
import { useCallback, useState } from 'react';

export type BankInfo = {
  account_bank_code: string;
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
      getUserById().then(response => {
        setLoading(false);
        console.log('Response user by id: ', response.result.data[0]);
        const bankAccountInfo: BankInfo = {
          account_bank_code: response.result.data?.[0].account_bank_code,
          account_bank: response.result.data?.[0].account_bank,
          account_bank_name: response.result.data?.[0].account_bank_name,
          account_bank_number: String(response.result.data?.[0].account_bank_number),
        };
        setBankAccount(bankAccountInfo);
      });
    }, []),
  );

  return { loading, bankAccount };
};

export default useGetBankAccount;
