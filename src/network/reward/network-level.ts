import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';

type ApiCallGetNetworkLevel = () => Promise<PublicAPIResponse<NetworkType[]>>;

const getNetworkLevelEndpoint = '/network/level';
const getNetworkLevel: ApiCallGetNetworkLevel = async () => {
  const response = await Api.get(getNetworkLevelEndpoint);
  return response;
};

export default getNetworkLevel;
