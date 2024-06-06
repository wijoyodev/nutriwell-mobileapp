import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ProfileResponse = {
  data: {
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
