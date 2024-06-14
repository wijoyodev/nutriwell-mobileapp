import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getCity, { CityResponse } from 'network/address-list/city';

const useGetCity = (id: number) => {
  const [cityList, setCityList] = useState<CityResponse[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        setLoading(true);
        getCity(id).then(response => {
          console.log(response);
          setLoading(false);
          setCityList(response.result);
        });
      } else {
        setCityList([]);
      }
    }, [id]),
  );

  return { loading, cityList };
};

export default useGetCity;
