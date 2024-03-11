import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getNetwork from 'network/reward/network';
import { NetworkDetail } from 'screen/network-detail/NetworkDetailScreen';

const useGetNetwork = () => {
  const [network, setNetwork] = useState<NetworkDetail>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getNetwork().then(response => {
        setLoading(false);
        setNetwork(response.data);
      });
    }, []),
  );

  return { loading, network };
};

export default useGetNetwork;
