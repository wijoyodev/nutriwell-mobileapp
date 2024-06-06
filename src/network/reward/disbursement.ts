import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getUserId } from 'service/StorageUtils';

export type DisbursementHistoryResponse = {
  id: number;
  user_id: number;
  disbursement_value: number;
  status_disbursement: string;
  success_disbursement_date: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type DisbursementResponse = {
  data: DisbursementHistoryResponse[];
  disburse_success: {
    total_value: number;
    status_disbursement: string;
  };
  disburse_quota: number;
  total_rewards: number;
  offset: number;
  limit: number;
};

type ApiCallGetDisbursement = (
  offset: number,
) => Promise<PublicAPIResponse<DisbursementResponse>>;

const getDisbursementEndpoint = '/disbursement';
const getDisbursement: ApiCallGetDisbursement = async (offset: number) => {
  const user_id = await getUserId();
  const response = await Api.get(getDisbursementEndpoint, {
    status: 'COMPLETED',
    offset,
    user_id,
  });
  return response;
};

export default getDisbursement;
