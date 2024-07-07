import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ProfileResponse = {
  data: {
    account_bank: string;
    account_bank_code: string;
    account_bank_name: string;
    account_bank_number: string;
    avatar_url: string;
    full_name: string;
    date_of_birth: string;
    email: string;
    gender: string;
    phone_number: string;
    upline: {
      code: string;
      full_name: string;
      join_date: string;
      phone_number: string;
      avatar_url: string;
    };
  }[];
};

type ApiCallGetProfile = () => Promise<PublicAPIResponse<ProfileResponse>>;

const getProfileEndpoint = '/user/me';
const getProfile: ApiCallGetProfile = async () => {
  const response = await Api.get(getProfileEndpoint);
  return response;
};

export default getProfile;
