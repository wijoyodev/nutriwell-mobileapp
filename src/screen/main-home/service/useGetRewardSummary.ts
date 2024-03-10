import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getRewardSummary from 'network/reward/summary';
import { RewardSummary } from 'screen/reward-home/RewardHomeScreen';

const useGetRewardSummary = () => {
  const [rewardSummary, setRewardSummary] = useState<RewardSummary>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getRewardSummary().then(response => {
        setLoading(false);
        setRewardSummary(response.data);
      });
    }, []),
  );

  return { loading, rewardSummary };
};

export default useGetRewardSummary;
