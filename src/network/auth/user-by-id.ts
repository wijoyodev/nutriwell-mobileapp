import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getUserId } from 'service/StorageUtils';

export type UserResponse = {
  data: {
    id: number;
    full_name: string;
    email: string;
    phone_number: string;
    gender: string;
    date_of_birth: string;
    avatar_url: string;
    referral_code: string;
    referrer_code: string;
    account_bank: string;
    account_bank_code: string;
    account_bank_name: string;
    account_bank_number: string;
    status?: boolean;
  }[];
  network_reference: {
    level: number;
    transactions: number;
    total_network: number;
  }[];
};

type ApiCallGetUserById = () => Promise<PublicAPIResponse<UserResponse>>;

const getUserByIdEndpoint = '/user';
const getUserById: ApiCallGetUserById = async () => {
  const userId = await getUserId();
  const response = await Api.get(`${getUserByIdEndpoint}/${userId}`);
  return response;
};

export default getUserById;
