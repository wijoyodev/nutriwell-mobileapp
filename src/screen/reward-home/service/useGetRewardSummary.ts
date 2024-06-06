import { useCallback, useState } from 'react';
import {
  NetworkSummary,
  NetworkType,
  RewardSummary,
} from '../RewardHomeScreen';
import { useFocusEffect } from '@react-navigation/native';
import getListNetwork, { NetworkResponse } from 'network/reward/list-network';
import getReward from 'network/reward/reward';

const useGetRewardSummary = () => {
  const [rewardSummary, setRewardSummary] = useState<RewardSummary>({
    totalReward: 0,
    redeemableReward: 0,
    monthlyReward: 0,
  });

  const [networkSummary, setNetworkSummary] = useState<NetworkSummary>({
    totalReferenceNetwork: 0,
    referenceNetworkList: [],
  });

  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getListNetwork(0).then(response => {
        console.log(response);
        setLoading(false);
        const networkSummaryValue: NetworkSummary = {
          totalReferenceNetwork: response.result.total_network,
          referenceNetworkList: response.result.data.map(item =>
            convertNetworkResponseToNetworkType(item),
          ),
        };

        setNetworkSummary(networkSummaryValue);
      });
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getReward().then(response => {
        console.log(response);
        setLoading(false);
        const rewardSummaryValue: RewardSummary = {
          ...rewardSummary,
          totalReward: response.result.total_reward,
          redeemableReward: response.result.total_cashable,
          monthlyReward: response.result.total_this_month,
        };

        setRewardSummary(rewardSummaryValue);
      });
    }, []),
  );

  return { loading, rewardSummary, networkSummary };
};

const convertNetworkResponseToNetworkType = (response: NetworkResponse) => {
  const networkType: NetworkType = {
    id: response.id,
    userId: response.user_id,
    name: response.full_name,
    level: response.level,
    network: response.total_downlines,
    imageUrl: response.avatar_url,
  };

  return networkType;
};

export default useGetRewardSummary;
