import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getNetwork from 'network/reward/network';
import { NetworkDetail } from 'screen/network-detail/NetworkDetailScreen';

const useGetNetwork = (id: string) => {
  const [network, setNetwork] = useState<NetworkDetail>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getNetwork(id).then(response => {
        console.log('Response network detail: ', response);
        setLoading(false);
        setNetwork(response.result);
      });
    }, []),
  );

  return { loading, network };
};

export default useGetNetwork;
