import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { AddressResponse } from './address';

export type AddressRequest = {
  id?: string;
  recipient_name: string;
  recipient_phone_number: string;
  phone_number_country: string;
  province: string;
  city: string;
  district: string;
  postal_code: string;
  address_detail: string;
};

type ApiCallCreateAddress = (
  request: AddressRequest,
) => Promise<PublicAPIResponse<AddressResponse[]>>;

const createAddressEndpoint = '/address';
const createAddress: ApiCallCreateAddress = async (request: AddressRequest) => {
  const response = await Api.post(createAddressEndpoint, request);
  return response;
};

export default createAddress;
