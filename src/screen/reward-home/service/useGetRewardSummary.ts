import { useCallback, useState } from 'react'
import { RewardSummary } from '../RewardHomeScreen';
import { useFocusEffect } from '@react-navigation/native';
import getRewardSummary from 'network/reward/summary';

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
