import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getNetworkStatus, {
  NetworkDetailResponse,
} from 'network/reward/network-status';
import { NetworkTypeSummary } from '../components/ReferenceNetworkComponent';

const useGetNetwork = () => {
  const [network, setNetwork] = useState<NetworkTypeSummary[]>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);

      getNetworkStatus().then(response => {
        console.log('Response network: ', response.result);
        setLoading(false);
        setNetwork(convertToNetworks(response.result));
      });
    }, []),
  );

  return { loading, network };
};

const convertToNetworks = (response: NetworkDetailResponse) => {
  const data = response.totalStat[0];
  const networkLevelList: NetworkTypeSummary[] = [];
  if (data.level_1) {
    networkLevelList.push({
      level: 1,
      totalNetwork: data.level_1,
      totalActive: data.level_1_transaction,
    });
  }

  if (data.level_2) {
    networkLevelList.push({
      level: 2,
      totalNetwork: data.level_2,
      totalActive: data.level_2_transaction,
    });
  }

  if (data.level_3) {
    networkLevelList.push({
      level: 3,
      totalNetwork: data.level_3,
      totalActive: data.level_3_transaction,
    });
  }

  if (data.level_4) {
    networkLevelList.push({
      level: 4,
      totalNetwork: data.level_4,
      totalActive: data.level_4_transaction,
    });
  }

  if (data.level_5) {
    networkLevelList.push({
      level: 5,
      totalNetwork: data.level_5,
      totalActive: data.level_5_transaction,
    });
  }

  return networkLevelList;
};

export default useGetNetwork;
