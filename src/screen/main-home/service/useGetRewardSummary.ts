import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RewardSummary } from 'screen/reward-home/RewardHomeScreen';
import getReward from 'network/reward/reward';

const useGetRewardSummary = () => {
  const [rewardSummary, setRewardSummary] = useState<RewardSummary>();
  const [loading, setLoading] = useState<boolean>();

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
    }, []),
  );

  return { loading, rewardSummary };
};

export default useGetRewardSummary;
