import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type DistrictResponse = {
  id: number;
  district: string;
};

type ApiCallGetDistrict = (
  city_id: number,
) => Promise<PublicAPIResponse<DistrictResponse[]>>;

const getDistrictEndpoint = '/address-list/district';
const getDistrict: ApiCallGetDistrict = async (city_id: number) => {
  const response = await Api.get(getDistrictEndpoint, { city_id });
  return response;
};

export default getDistrict;
