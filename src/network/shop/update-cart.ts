import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

type UpdateCartRequest = {
  price: number;
  price_after_tax: number;
  weight: number;
  quantity: number;
};

type ApiCallUpdateCart = (
  id: number,
  request: UpdateCartRequest,
) => Promise<PublicAPIResponse<any>>;

const UpdateCartEndpoint = '/cart';
const updateCart: ApiCallUpdateCart = async (
  id: number,
  request: UpdateCartRequest,
) => {
  const response = await Api.patch(`${UpdateCartEndpoint}/${id}`, request);
  return response;
};

export default updateCart;
