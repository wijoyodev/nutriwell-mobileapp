import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ProfileResponse = {
  id: number;
  full_name?: string;
  avatar?: any;
  date_of_birth?: string;
  phone_number?: string;
  gender?: string;
  account_bank?: string;
  account_bank_name?: string;
  account_bank_number?: string;
};

export type ProfileRequest = {
  id: number;
  full_name?: string;
  avatar?: any;
  date_of_birth?: string;
  phone_number?: string;
  gender?: string;
  account_bank?: string;
  account_bank_name?: string;
  account_bank_number?: string;
};

type ApiCallUpdateProfile = (
  request: ProfileRequest,
) => Promise<PublicAPIResponse<ProfileResponse>>;

const updateProfileEndpoint = '/profile';
const updateProfile: ApiCallUpdateProfile = async (request: ProfileRequest) => {
  const response = await Api.post(updateProfileEndpoint, request);
  return response;
};

export default updateProfile;
