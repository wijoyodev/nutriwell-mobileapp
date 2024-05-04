import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { AddressResponse } from './address';
import { AddressRequest } from './create-address';

type ApiCallUpdateAddress = (
  request: AddressRequest,
) => Promise<PublicAPIResponse<AddressResponse[]>>;

const updateAddressEndpoint = '/address';
const updateAddress: ApiCallUpdateAddress = async (request: AddressRequest) => {
  const response = await Api.patch(updateAddressEndpoint, request);
  return response;
};

export default updateAddress;
