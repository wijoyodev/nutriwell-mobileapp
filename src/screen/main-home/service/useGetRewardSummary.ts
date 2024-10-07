import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RewardSummary } from 'screen/reward-home/RewardHomeScreen';
import getReward from 'network/reward/reward';
import { getActive } from 'service/StorageUtils';
import getUserById from 'network/auth/user-by-id';

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

      getUserById().then(response => {
        setLoading(false);
        console.log('Response user by id: ', response.result.data[0]);

        const active = response.result.data?.[0].status ?? false;
        setActive(active);
      });
    }, []),
  );

  return { loading, rewardSummary, isActive };
};

export default useGetRewardSummary;
