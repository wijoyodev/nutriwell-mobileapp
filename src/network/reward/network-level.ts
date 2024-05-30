import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { NetworkListResponse } from './list-network';

export type GetNetworkLevelRequest = {
  level: number;
  user_id: number;
  offset: number;
};

type ApiCallGetNetworkLevel = (
  request: GetNetworkLevelRequest,
) => Promise<PublicAPIResponse<NetworkListResponse>>;

const getNetworkLevelEndpoint = '/network';
const getNetworkLevel: ApiCallGetNetworkLevel = async (
  request: GetNetworkLevelRequest,
) => {
  const response = await Api.get(getNetworkLevelEndpoint, request);
  return response;
};

export default getNetworkLevel;
