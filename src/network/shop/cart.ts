import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { CartItem } from 'screen/cart/CartScreen';

export type CartItemResponse = {
  id: number;
  product_id: number;
  product_name: string;
  price: number;
  quantity: number;
  total_price: number;
  total_weight: number;
  product_images: string[];
};

type ApiCallGetCart = () => Promise<PublicAPIResponse<CartItemResponse[]>>;

const getCartEndpoint = '/cart';
const getCart: ApiCallGetCart = async () => {
  const response = await Api.get(getCartEndpoint);
  return response;
};

export default getCart;
