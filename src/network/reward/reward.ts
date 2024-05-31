import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type RewardHistoryResponse = {
  id: number;
  user_id: number;
  reward_profit: number;
  description: string;
  created_at: string;
  updated_at: string;
};

export type RewardResponse = {
  data: RewardHistoryResponse[];
  total_cashable: number;
  total_reward: number;
  total_this_month: number;
};

type ApiCallGetReward = () => Promise<PublicAPIResponse<RewardResponse>>;

const getRewardEndpoint = '/reward';
const getReward: ApiCallGetReward = async () => {
  const response = await Api.get(getRewardEndpoint);
  return response;
};

export default getReward;
