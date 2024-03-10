import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { Product } from 'screen/shop-home/ShopHomeScreen';

type ApiCallGetProduct = () => Promise<PublicAPIResponse<Product>>;

const getProductEndpoint = '/product';
const getProduct: ApiCallGetProduct = async () => {
  const response = await Api.get(getProductEndpoint);
  return response;
};

export default getProduct;
