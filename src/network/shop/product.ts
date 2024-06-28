import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { Product } from 'screen/shop-home/ShopHomeScreen';

export type ApiProductResponse = {
  data: ProductResponse[];
  ppn_tax: number;
};

export type ProductResponse = {
  id: number;
  product_images: string[];
  product_name: string;
  price: number;
  price_after_tax: number;
  description: string;
};

type ApiCallGetProduct = () => Promise<PublicAPIResponse<ApiProductResponse>>;

const getProductEndpoint = '/product';
const getProduct: ApiCallGetProduct = async () => {
  const response = await Api.get(getProductEndpoint);
  return response;
};

export default getProduct;
