import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';
import getNetworkLevel from 'network/reward/network-level';

const useGetNetworkLevel = (level: number, user_id: number, offset: number) => {
  const [network, setNetwork] = useState<NetworkType[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getNetworkLevel({
        level,
        user_id,
        offset,
      }).then(response => {
        setLoading(false);
        console.log('Response network level: ', response.result.data);
        const list: NetworkType[] = response.result.data.map(item => ({
          id: item.id,
          userId: item.user_id,
          name: item.full_name,
          level: item.level,
          imageUrl: item.avatar_url,
          network: item.total_downlines,
          uplineName: item.upline.full_name,
        }));

        const networkList: NetworkType[] =
          offset === 0 ? list : [...network, ...list];
        setNetwork(networkList);
      });
    }, [level, user_id, offset]),
  );

  return { loading, network };
};

export default useGetNetworkLevel;
