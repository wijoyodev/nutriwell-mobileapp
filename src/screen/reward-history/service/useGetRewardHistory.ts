import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getRewardHistory, {
  RewardHistoryResponse,
} from 'network/reward/history';

const useGetRewardHistory = () => {
  const [rewardHistory, setRewardHistory] = useState<RewardHistoryResponse>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getRewardHistory().then(response => {
        setLoading(false);
        setRewardHistory(response.data);
      });
    }, []),
  );

  return { loading, rewardHistory };
};

export default useGetRewardHistory;
