import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getProvince, { ProvinceResponse } from 'network/address-list/province';
import { AddressOption } from '../ShippingAddressScreen';

const useGetProvince = () => {
  const [provinces, setProvinces] = useState<AddressOption[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getProvince().then(response => {
        console.log(response);
        setLoading(false);
        setProvinces(
          response.result.map(item => ({
            id: item.id,
            name: item.province,
          })),
        );
      });
    }, []),
  );

  return { loading, provinces };
};

export default useGetProvince;
