import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getUserId } from 'service/StorageUtils';

export type BankResponse = {
  data: {
    account_bank: string;
    account_bank_name: string;
    account_bank_number: string;
  }[];
};

type ApiCallGetBankAccount = () => Promise<PublicAPIResponse<BankResponse>>;

const getBankAccountEndpoint = '/user';
const getBankAccount: ApiCallGetBankAccount = async () => {
  const userId = await getUserId();
  const response = await Api.get(`${getBankAccountEndpoint}/${userId}`);
  return response;
};

export default getBankAccount;
