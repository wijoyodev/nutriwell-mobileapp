import { useCallback, useState } from 'react';

import { useFocusEffect } from '@react-navigation/native';
import getDistrict, { DistrictResponse } from 'network/address-list/district';

const useGetDistrict = (id: number) => {
  const [districtList, setDistrictList] = useState<DistrictResponse[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      if (id) {
        setLoading(true);
        getDistrict(id).then(response => {
          console.log(response);
          setLoading(false);
          setDistrictList(response.result);
        });
      } else {
        setDistrictList([]);
      }
    }, [id]),
  );

  return { loading, districtList };
};

export default useGetDistrict;
