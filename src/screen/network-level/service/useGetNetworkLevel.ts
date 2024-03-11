import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';
import getNetworkLevel from 'network/reward/network-level';

const useGetNetworkLevel = () => {
  const [network, setNetwork] = useState<NetworkType[]>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getNetworkLevel().then(response => {
        setLoading(false);
        setNetwork(response.data);
      });
    }, []),
  );

  return { loading, network };
};

export default useGetNetworkLevel;
