import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getUserId } from 'service/StorageUtils';

export type NetworkResponse = {
  id: number;
  user_id: number;
  level: number;
  upline_first_id: number;
  upline_second_id: number;
  upline_third_id: number;
  upline_fourth_id: number;
  upline_fifth_id: number;
  full_name: string;
  avatar_url: string;
  referrer_code: string;
  referral_code: string;
  email: string;
  phone_number: string;
  has_transaction: number;
  total_downlines: number;
  upline: {
    full_name: string;
    join_date: string;
  };
};

export type NetworkListResponse = {
  data: NetworkResponse[];
  offset: number;
  limit: number;
  total_network: number;
};

type ApiCallGetListNetwork = (
  offset: number,
) => Promise<PublicAPIResponse<NetworkListResponse>>;

const getListNetworkEndpoint = '/network';
const getListNetwork: ApiCallGetListNetwork = async (offset: number) => {
  const userId = await getUserId();
  const response = await Api.get(getListNetworkEndpoint, {
    offset,
    user_id: userId,
  });
  return response;
};

export default getListNetwork;
