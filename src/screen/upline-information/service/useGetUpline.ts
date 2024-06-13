import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { UplineInformationResponse } from 'network/reward/upline';
import getProfile from 'network/auth/profile';

const useGetUpline = () => {
  const [upline, setUpline] = useState<UplineInformationResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setIsError(false);
      setLoading(true);
      getProfile()
        .then(response => {
          console.log('Response profile: ', response.result.data);
          const data = response.result.data[0].upline;
          setLoading(false);
          setUpline({
            name: data.full_name,
            joinDate: new Date(data.join_date),
            phoneNumber: data.phone_number,
            imageUrl: data.avatar_url,
          });
        })
        .catch(err => {
          console.log('Error get upline: ', err);
          setLoading(false);
          setIsError(true);
        });
    }, []),
  );

  return { loading, upline, isError };
};

export default useGetUpline;
