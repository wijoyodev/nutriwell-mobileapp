import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

type AddToCartRequest = {
  product_id: string;
  quantity: string;
};

type ApiCallAddToCart = (
  request: AddToCartRequest,
) => Promise<PublicAPIResponse<any>>;

const addToCartEndpoint = '/cart';
const addToCart: ApiCallAddToCart = async (request: AddToCartRequest) => {
  const response = await Api.post(addToCartEndpoint, request);
  return response;
};

export default addToCart;
