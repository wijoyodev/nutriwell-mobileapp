import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getUpline, { UplineInformationResponse } from 'network/reward/upline';

const useGetUpline = () => {
  const [upline, setUpline] = useState<UplineInformationResponse>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getUpline().then(response => {
        setLoading(false);
        setUpline(response.data);
      });
    }, []),
  );

  return { loading, upline };
};

export default useGetUpline;
