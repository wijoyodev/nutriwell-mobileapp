import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getUserId } from 'service/StorageUtils';

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

export type OrderHistoryItemResponse = {
  id: number;
  order_number: string;
  status: number;
  address_shipment_id: number;
  courier_name: string;
  courier_rate: number;
  courier_service_name: string;
  courier_company: string;
  courier_type: string;
  estimated_delivery_date: string;
  external_id: string | null;
  total_purchase: number;
  payment_url: string;
  payment_expiry_date: string | null;
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

export type OrderHistoryResponse = {
  data: OrderHistoryItemResponse[];
  limit: number;
  offset: number;
  total: number;
};

export type OrderHistoryRequest = {
  status: number;
  offset: number;
};

type ApiCallGetOrderHistory = (
  request: OrderHistoryRequest,
) => Promise<PublicAPIResponse<OrderHistoryResponse>>;

const getOrderHistoryEndpoint = '/orders';
const getOrderHistory: ApiCallGetOrderHistory = async (
  request: OrderHistoryRequest,
) => {
  const user_id = await getUserId();
  const response = await Api.get(getOrderHistoryEndpoint, {
    ...request,
    user_id,
  });
  return response;
};

export default getOrderHistory;
