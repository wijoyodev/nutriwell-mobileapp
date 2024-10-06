import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RewardSummary } from 'screen/reward-home/RewardHomeScreen';
import getReward from 'network/reward/reward';
import { getActive } from 'service/StorageUtils';

const useGetRewardSummary = () => {
  const [rewardSummary, setRewardSummary] = useState<RewardSummary>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getReward().then(response => {
        setLoading(false);

        const reward: RewardSummary = {
          totalReward: response.result.total_reward,
          monthlyReward: response.result.total_this_month,
          redeemableReward: response.result.total_cashable,
          referralCode: '',
        };

        setRewardSummary(reward);
      });

      getActive().then(setActive);
    }, []),
  );

  return { loading, rewardSummary, isActive };
};

export default useGetRewardSummary;
