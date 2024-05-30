import { useCallback, useState } from 'react';
import { NetworkType, RewardSummary } from '../RewardHomeScreen';
import { useFocusEffect } from '@react-navigation/native';
import getListNetwork, { NetworkResponse } from 'network/reward/list-network';

const useGetRewardSummary = () => {
  const [rewardSummary, setRewardSummary] = useState<RewardSummary>({
    totalReward: 0,
    totalReferenceNetwork: 0,
    redeemableReward: 0,
    monthlyReward: 0,
    referenceNetworkList: [],
    referralCode: '',
  });

  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getListNetwork(0).then(response => {
        console.log(response);
        setLoading(false);
        const rewardSummaryValue: RewardSummary = {
          ...rewardSummary,
          referenceNetworkList: response.result.data.map(item =>
            convertNetworkResponseToNetworkType(item),
          ),
        };

        setRewardSummary(rewardSummaryValue);
      });
    }, []),
  );

  return { loading, rewardSummary };
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
