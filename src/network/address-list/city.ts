import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type CityResponse = {
  id: number;
  city: string;
};

type ApiCallGetCity = (
  province_id: number,
) => Promise<PublicAPIResponse<CityResponse[]>>;

const getCityEndpoint = '/address-list/city';
const getCity: ApiCallGetCity = async (province_id: number) => {
  const response = await Api.get(getCityEndpoint, { province_id });
  return response;
};

export default getCity;
