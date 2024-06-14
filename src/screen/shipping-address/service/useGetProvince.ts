import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getProvince, { ProvinceResponse } from 'network/address-list/province';

const useGetProvince = () => {
  const [provinces, setProvinces] = useState<ProvinceResponse[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getProvince().then(response => {
        console.log(response);
        setLoading(false);
        setProvinces(response.result);
      });
    }, []),
  );

  return { loading, provinces };
};

export default useGetProvince;
