import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getReward from 'network/reward/reward';
import { RewardHistory } from '../RewardHistoryScreen';

const useGetRewardHistory = () => {
  const [rewardHistory, setRewardHistory] = useState<RewardHistory[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getReward().then(response => {
        setLoading(false);
        console.log('Response rewards: ', response.result);
        const histories: RewardHistory[] = response.result.data.map(item => ({
          date: new Date(item.created_at),
          description: item.description,
          reward: item.reward_profit,
          isIncome: true,
        }));
        setRewardHistory(histories);
      });
    }, []),
  );

  return { loading, rewardHistory };
};

export default useGetRewardHistory;
