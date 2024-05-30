import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';
import getListNetwork from 'network/reward/list-network';

const useGetAllNetwork = (offset: number) => {
  const [network, setNetwork] = useState<NetworkType[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getListNetwork(offset).then(response => {
        setLoading(false);
        const list: NetworkType[] = response.result.data.map(item => ({
          id: item.id,
          userId: item.user_id,
          name: item.full_name,
          level: item.level,
          imageUrl: item.avatar_url,
          network: item.total_downlines,
        }));

        const networkList: NetworkType[] =
          offset === 0 ? list : [...network, ...list];
        setNetwork(networkList);
      });
    }, [offset]),
  );

  return { loading, network };
};

export default useGetAllNetwork;
