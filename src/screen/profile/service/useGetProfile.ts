import { useFocusEffect } from '@react-navigation/native';
import getUserById from 'network/auth/user-by-id';
import { useCallback, useState } from 'react';
import { ProfileData } from 'service/Utils';
import { BankInfo } from './useGetBankAccount';

export type BankInfo = {
  account_bank_code: string;
  account_bank: string;
  account_bank_number: string;
  account_bank_name: string;
};

const useGetProfile = () => {
  const [profile, setProfile] = useState<ProfileData>();
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
          account_bank_number: String(
            response.result.data?.[0].account_bank_number,
          ),
        };
        setBankAccount(bankAccountInfo);

        const profileData: ProfileData = {
          email: response.result.data?.[0].email,
          name: response.result.data?.[0].full_name,
          gender: response.result.data?.[0].gender,
          birthDate: new Date(response.result.data?.[0].date_of_birth),
          phoneNumber: response.result.data?.[0].phone_number,
          imageUrl: response.result.data?.[0].avatar_url,
          userId: response.result.data?.[0].id.toString(),
          active: response.result.data?.[0].status ?? false,
        };

        setProfile(profileData);
      });
    }, []),
  );

  return { loading, profile, bankAccount };
};

export default useGetProfile;
