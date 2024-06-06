import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type DisbursementBankResponse = {
  can_disburse: boolean;
  can_name_validate: boolean;
  name: string;
  code: string;
};

type ApiCallGetDisbursementBank = () => Promise<PublicAPIResponse<DisbursementBankResponse[]>>;

const getDisbursementBankEndpoint = '/disbursement/bank';
const getDisbursementBank: ApiCallGetDisbursementBank = async () => {
  const response = await Api.get(getDisbursementBankEndpoint);
  return response;
};

export default getDisbursementBank;
