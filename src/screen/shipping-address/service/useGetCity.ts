import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getCity from 'network/address-list/city';
import { AddressOption } from '../ShippingAddressScreen';

const useGetCity = (id: number) => {
  const [cityList, setCityList] = useState<AddressOption[]>([]);
  const [loading, setLoading] = useState<boolean>();
  const [fetched, setFetched] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      if (id) {
        setLoading(true);
        getCity(id).then(response => {
          setLoading(false);
          setCityList(
            response.result.map(item => ({
              id: item.id,
              name: item.city,
            })),
          );
          setFetched(true);
        });
      } else {
        setCityList([]);
      }
    }, [id]),
  );

  return { loading, cityList, fetched };
};

export default useGetCity;
