import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { RewardHistory } from '../RewardHistoryScreen';
import getDisbursement from 'network/reward/disbursement';

const useGetDisbursement = (offset: number) => {
  const [disbursementHistory, setDisbursementHistory] = useState<
    RewardHistory[]
  >([]);
  const [totalReward, setTotalReward] = useState<number>(0);
  const [totalWithdraw, setTotalWithdraw] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getDisbursement(offset).then(response => {
        setLoading(false);
        console.log('Response disbursements: ', response.result);
        const list: RewardHistory[] = response.result.data.map(item => ({
          date: new Date(item.success_disbursement_date),
          description: item.description,
          reward: item.disbursement_value,
          isIncome: false,
        }));
        const data: RewardHistory[] =
          offset === 0 ? list : [...disbursementHistory, ...list];
        setDisbursementHistory(data);

        setTotalWithdraw(response.result.disburse_success.total_value);
        setTotalReward(response.result.total_rewards);
      });
    }, [offset]),
  );

  return { loading, disbursementHistory, totalWithdraw, totalReward };
};

export default useGetDisbursement;
