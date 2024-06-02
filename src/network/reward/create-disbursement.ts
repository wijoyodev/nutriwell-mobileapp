import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type DisbursementRequest = {
  amount: number;
  account_bank: string;
  account_bank_name: string;
  account_bank_number: string;
};

type ApiCallCreateDisbursement = (
  request: DisbursementRequest,
) => Promise<PublicAPIResponse<any>>;

const createDisbursementEndpoint = '/disbursement';
const createDisbursement: ApiCallCreateDisbursement = async (
  request: DisbursementRequest,
) => {
  const response = await Api.post(createDisbursementEndpoint, request);
  return response;
};

export default createDisbursement;
