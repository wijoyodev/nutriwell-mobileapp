import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getDistrict from 'network/address-list/district';
import { AddressOption } from '../ShippingAddressScreen';

const useGetDistrict = (id: number) => {
  const [districtList, setDistrictList] = useState<AddressOption[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [fetched, setFetched] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      if (id) {
        setLoading(true);
        getDistrict(id).then(response => {
          console.log(response);
          setLoading(false);
          setDistrictList(
            response.result.map(item => ({
              id: item.id,
              name: item.district,
            })),
          );
          setFetched(true);
        });
      } else {
        setDistrictList([]);
      }
    }, [id]),
  );

  return { loading, districtList, fetched };
};

export default useGetDistrict;
