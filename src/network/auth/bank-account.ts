import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { BankOption } from 'screen/bank-account/BankAccountScreen';

export type BankResponse = {
  bank: BankOption;
  accountHolder: string;
  accountNumber: string;
};

type ApiCallGetBankAccount = () => Promise<PublicAPIResponse<BankResponse>>;

const getBankAccountEndpoint = '/bank';
const getBankAccount: ApiCallGetBankAccount = async () => {
  const response = await Api.get(getBankAccountEndpoint);
  return response;
};

export default getBankAccount;
