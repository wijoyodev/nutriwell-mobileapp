import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type UplineInformationResponse = {
  name: string;
  imageUrl: string;
  joinDate: Date;
  phoneNumber: string;
};

type ApiCallGetUpline = () => Promise<
  PublicAPIResponse<UplineInformationResponse>
>;

const getUplineEndpoint = '/upline';
const getUpline: ApiCallGetUpline = async () => {
  const response = await Api.get(getUplineEndpoint);
  return response;
};

export default getUpline;
