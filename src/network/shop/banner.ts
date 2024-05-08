import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type BannerItemResponse = {
  id: number;
  image_url: string;
  title: string;
  description: string;
  code: string;
};

type ApiCallGetBanner = () => Promise<PublicAPIResponse<BannerItemResponse[]>>;

const getBannerEndpoint = '/banner';
const getBanner: ApiCallGetBanner = async () => {
  const response = await Api.get(getBannerEndpoint);
  return response;
};

export default getBanner;
