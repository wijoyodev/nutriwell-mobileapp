import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import {
  HistoryRewardSummary,
  RewardHistory,
} from 'screen/reward-history/RewardHistoryScreen';

export type RewardHistoryResponse = {
  summary: HistoryRewardSummary;
  history: RewardHistory[];
};

type ApiCallGetRewardHistory = () => Promise<
  PublicAPIResponse<RewardHistoryResponse>
>;

const getRewardHistoryEndpoint = '/reward/history';
const getRewardHistory: ApiCallGetRewardHistory = async () => {
  const response = await Api.get(getRewardHistoryEndpoint);
  return response;
};

export default getRewardHistory;
