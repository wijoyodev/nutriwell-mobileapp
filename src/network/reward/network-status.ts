import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type NetworkDetailResponse = {
  totalStat: {
    level: number;
    full_name: string;
    created_at: string;
    upline_id: number;
    sum_transaction: number;
    avatar_url: string;
    level_1: number;
    level_1_transaction: number;
    level_2: number;
    level_2_transaction: number;
    level_3: number;
    level_3_transaction: number;
    level_4: number;
    level_4_transaction: number;
    level_5: number;
    level_5_transaction: number;
  }[];
  totalNetwork: {
    total_network: number;
  }[];
};

type ApiCallGetNetworkStatus = (
  id: string,
) => Promise<PublicAPIResponse<NetworkDetailResponse>>;

const getNetworkStatusEndpoint = '/network/status';
const getNetworkStatus: ApiCallGetNetworkStatus = async (id: string) => {
  const response = await Api.get(getNetworkStatusEndpoint, { user_id: id });

  return response;
};

export default getNetworkStatus;
