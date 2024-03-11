import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { NetworkDetail } from 'screen/network-detail/NetworkDetailScreen';

type ApiCallGetNetwork = () => Promise<PublicAPIResponse<NetworkDetail>>;

const getNetworkEndpoint = '/network';
const getNetwork: ApiCallGetNetwork = async () => {
  const response = await Api.get(getNetworkEndpoint);
  return response;
};

export default getNetwork;
