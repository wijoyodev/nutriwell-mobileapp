import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getCity from 'network/address-list/city';
import { AddressOption } from '../ShippingAddressScreen';

const useGetCity = (id: number) => {
  const [cityList, setCityList] = useState<AddressOption[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        setLoading(true);
        getCity(id).then(response => {
          console.log(response);
          setLoading(false);
          setCityList(
            response.result.map(item => ({
              id: item.id,
              name: item.city,
            })),
          );
        });
      } else {
        setCityList([]);
      }
    }, [id]),
  );

  return { loading, cityList };
};

export default useGetCity;
