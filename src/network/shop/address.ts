import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type AddressResponse = {
  id: number;
  user_id: number;
  recipient_name: string;
  recipient_phone_number: string;
  phone_number_country: string;
  province: string;
  city: string;
  district: string;
  subdistrict: string;
  postal_code: string;
  address_detail: string;
  created_at: string;
  updated_at: string;
};

type ApiCallGetAddress = () => Promise<PublicAPIResponse<AddressResponse[]>>;

const getAddressEndpoint = '/address';
const getAddress: ApiCallGetAddress = async () => {
  const response = await Api.get(getAddressEndpoint);
  return response;
};

export default getAddress;
