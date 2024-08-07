import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ApiCartResponse = {
  data: CartItemResponse[];
  ppn_tax: number;
};

export type CartItemResponse = {
  id: number;
  product_id: number;
  product_name: string;
  price: number;
  price_after_tax: number;
  product_weight: number;
  quantity: number;
  total_price: number;
  total_weight: number;
  product_images: string[];
};

type ApiCallGetCart = () => Promise<PublicAPIResponse<ApiCartResponse>>;

const getCartEndpoint = '/cart';
const getCart: ApiCallGetCart = async () => {
  const response = await Api.get(getCartEndpoint);
  return response;
};

export default getCart;
