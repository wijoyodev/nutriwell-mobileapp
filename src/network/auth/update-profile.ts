import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ProfileResponse = {
  name: string;
  email: string;
  imageUrl: string;
  birthDate: Date;
  phoneNumber: string;
  gender: string;
};

export type ProfileRequest = {
  name: string;
  email: string;
  imageUrl?: string;
  birthDate: Date;
  phoneNumber: string;
  gender: string;
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
