import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

type ApiCallDeleteCart = (cartId: number) => Promise<PublicAPIResponse<any>>;

const deleteCartEndpoint = '/cart';
const deleteCart: ApiCallDeleteCart = async (cartId: number) => {
  const response = await Api.deleteApi(`${deleteCartEndpoint}/${cartId}`, null);
  return response;
};

export default deleteCart;
