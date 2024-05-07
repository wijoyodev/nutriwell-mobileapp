import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';

export type NetworkResponse = {
  id: number;
  user_id: number;
  level: number;
  full_name: string;
  avatar_url: string;
  referrer_code: string;
  referral_code: string;
  email: string;
  phone_number: string;
  downlines: number;
};

export type NetworkListResponse = {
  data: NetworkResponse[];
};

type ApiCallGetListNetwork = () => Promise<
  PublicAPIResponse<NetworkListResponse>
>;

const getListNetworkEndpoint = '/network';
const getListNetwork: ApiCallGetListNetwork = async () => {
  const response = await Api.get(getListNetworkEndpoint);
  return response;
};

export default getListNetwork;
