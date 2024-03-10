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

type ApiCallGetProfile = () => Promise<PublicAPIResponse<ProfileResponse>>;

const getProfileEndpoint = '/profile';
const getProfile: ApiCallGetProfile = async () => {
  const response = await Api.get(getProfileEndpoint);
  return response;
};

export default getProfile;
