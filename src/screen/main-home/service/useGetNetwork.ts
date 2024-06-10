import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkDetail } from 'screen/network-detail/NetworkDetailScreen';
import getUserById, { UserResponse } from 'network/auth/user-by-id';

const useGetNetwork = () => {
  const [network, setNetwork] = useState<NetworkDetail>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getUserById().then(response => {
        console.log('Response network: ', response.result.network_reference);
        setLoading(false);
        setNetwork(convertUserResponseToNetwork(response.result));
      });
    }, []),
  );

  return { loading, network };
};

const convertUserResponseToNetwork = (response: UserResponse) => {
  const networkValue: NetworkDetail = {
    name: '',
    imageUrl: '',
    joinDate: new Date(),
    level: 1,
    monthlyPurchase: 0,
    networks:
      response.network_reference
        ?.map(item => ({
          level: item.level,
          totalNetwork: item.total_network,
          totalActive: item.transactions,
        }))
        .sort((a, b) => a.level - b.level) ?? [],
  };

  return networkValue;
};

export default useGetNetwork;
