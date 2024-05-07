import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getUserId } from 'service/StorageUtils';

export type ProfileResponse = {
  updated_data: {
    full_name?: string;
    avatar_url?: any;
    email: string;
    date_of_birth?: string;
    phone_number?: string;
    phone_number_country?: string;
    gender?: string;
  };
  status: number;
};

export type ProfileRequest = {
  full_name?: string;
  avatar?: any;
  email: string;
  date_of_birth?: string;
  phone_number?: string;
  phone_number_country?: string;
  gender?: string;
  account_bank?: string;
  account_bank_name?: string;
  account_bank_number?: string;
};

type ApiCallUpdateProfile = (
  request: ProfileRequest,
) => Promise<PublicAPIResponse<ProfileResponse>>;

const updateProfileEndpoint = '/user';
const updateProfile: ApiCallUpdateProfile = async (request: ProfileRequest) => {
  const userId = await getUserId();
  const response = await Api.patchWithForm(
    `${updateProfileEndpoint}/${userId}`,
    request,
  );
  return response;
};

export default updateProfile;
