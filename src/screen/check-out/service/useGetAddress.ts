import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Address } from '../CheckOutScreen';
import getAddress, { AddressResponse } from 'network/shop/address';
import { getUserId } from 'service/StorageUtils';

const useGetAddress = () => {
  const [address, setAddress] = useState<Address>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getAddress().then(async (response) => {
        console.log('Response address: ', response);
        setLoading(false);

        const userId = await getUserId();
        const addressValue = response.result.filter(
          addressResponse => addressResponse.user_id.toString() === userId,
        )?.[0];
        setAddress(convertAddress(addressValue));
      });
    }, []),
  );

  return { loading, address };
};

const convertAddress = (response: AddressResponse) => {
  const address: Address = {
    id: response.id,
    name: response.recipient_name,
    phoneNumber: response.recipient_phone_number,
    code:
      response.phone_number_country === 'ID'
        ? '+62'
        : response.phone_number_country,
    province: response.province,
    city: response.city,
    district: response.district,
    streetAddress: response.address_detail,
    postalCode: response.postal_code,
  };

  return address;
};

export default useGetAddress;
