import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ProductDetailResponse = {
  price: number;
  quantity: number;
  total_price: number;
  product_name: string;
  product_image: string[];
};

export type UserDetailResponse = {
  full_name: string;
  email: string;
  phone_number: string;
  recipient_name: string;
  recipient_phone_number: string;
  address_detail: string;
  subdistrict: string;
  district: string;
  city: string;
  province: string;
  postal_code: string;
  code: string;
};

export type OrderHistoryResponse = {
  id: number;
  order_number: string;
  status: number;
  address_shipment_id: number;
  courier_name: string;
  courier_rate: number;
  courier_service_name: string;
  courier_company: string;
  courier_type: string;
  external_id: string | null;
  total_purchase: number;
  payment_date: string | null;
  payment_method: string | null;
  shipment_number: string | null;
  delivery_date: string | null;
  receive_date: string | null;
  reasons: string;
  product_detail: ProductDetailResponse;
  user_detail: UserDetailResponse;
  created_at: string;
  updated_at: string;
};

type ApiCallGetOrderHistory = () => Promise<
  PublicAPIResponse<OrderHistoryResponse[]>
>;

const getOrderHistoryEndpoint = '/orders';
const getOrderHistory: ApiCallGetOrderHistory = async () => {
  const response = await Api.get(getOrderHistoryEndpoint);
  return response;
};

export default getOrderHistory;
