import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';

type ApiCallGetAllNetwork = () => Promise<PublicAPIResponse<NetworkType[]>>;

const getAllNetworkEndpoint = '/network/all';
const getAllNetwork: ApiCallGetAllNetwork = async () => {
  const response = await Api.get(getAllNetworkEndpoint);
  return response;
};

export default getAllNetwork;
