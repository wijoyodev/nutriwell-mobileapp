import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ProvinceResponse = {
  id: number;
  province: string;
};

type ApiCallGetProvince = () => Promise<PublicAPIResponse<ProvinceResponse[]>>;

const getProvinceEndpoint = '/address-list/province';
const getProvince: ApiCallGetProvince = async () => {
  const response = await Api.get(getProvinceEndpoint);
  return response;
};

export default getProvince;
