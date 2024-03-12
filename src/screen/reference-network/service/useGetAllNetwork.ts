import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';
import getAllNetwork from 'network/reward/all-network';

const useGetAllNetwork = () => {
  const [network, setNetwork] = useState<NetworkType[]>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getAllNetwork().then(response => {
        setLoading(false);
        setNetwork(response.data);
      });
    }, []),
  );

  return { loading, network };
};

export default useGetAllNetwork;
