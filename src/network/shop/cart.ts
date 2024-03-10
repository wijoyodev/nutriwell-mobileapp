import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { CartItem } from 'screen/cart/CartScreen';

type ApiCallGetCart = () => Promise<PublicAPIResponse<CartItem[]>>;

const getCartEndpoint = '/cart';
const getCart: ApiCallGetCart = async () => {
  const response = await Api.get(getCartEndpoint);
  return response;
};

export default getCart;
