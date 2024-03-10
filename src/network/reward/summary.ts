import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { RewardSummary } from 'screen/reward-home/RewardHomeScreen';

type ApiCallGetRewardSummary = () => Promise<PublicAPIResponse<RewardSummary>>;

const getRewardSummaryEndpoint = '/reward/summary';
const getRewardSummary: ApiCallGetRewardSummary = async () => {
  const response = await Api.get(getRewardSummaryEndpoint);
  return response;
};

export default getRewardSummary;
