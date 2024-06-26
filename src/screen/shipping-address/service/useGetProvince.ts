import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getProvince, { ProvinceResponse } from 'network/address-list/province';
import { AddressOption } from '../ShippingAddressScreen';

const useGetProvince = () => {
  const [provinces, setProvinces] = useState<AddressOption[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [fetched, setFetched] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getProvince().then(response => {
        setLoading(false);
        setProvinces(
          response.result.map(item => ({
            id: item.id,
            name: item.province,
          })),
        );
        setFetched(true);
      });
    }, []),
  );

  return { loading, provinces, fetched };
};

export default useGetProvince;
