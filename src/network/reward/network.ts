import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { NetworkDetail } from 'screen/network-detail/NetworkDetailScreen';

type ApiCallGetNetwork = (
  id: string,
) => Promise<PublicAPIResponse<NetworkDetail>>;

const getNetworkEndpoint = '/network';
const getNetwork: ApiCallGetNetwork = async (id: string) => {
  const response = await Api.get(`${getNetworkEndpoint}/${id}`);

  return response;
};

export default getNetwork;
