import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { CartItem } from 'screen/cart/CartScreen';
import { Address } from 'screen/check-out/CheckOutScreen';

export type CheckoutResponse = {
  items: CartItem[];
  address: Address;
};

type ApiCallCheckout = () => Promise<PublicAPIResponse<CheckoutResponse>>;

const checkoutEndpoint = '/checkout';
const checkout: ApiCallCheckout = async () => {
  const response = await Api.get(checkoutEndpoint);
  return response;
};

export default checkout;
