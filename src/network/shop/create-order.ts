import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type OrderRequest = {
  user_id: number;
  cart_id: number;
  address_shipment_id: number;
  courier_name: string;
  courier_company: string;
  courier_type: string;
  courier_service_name: string;
  courier_rate: number;
  total_purchase: number;
};

export type OrderResponse = {
  invoice_url: string;
};

type ApiCallCreateOrder = (
  request: OrderRequest,
) => Promise<PublicAPIResponse<OrderResponse>>;

const createOrderEndpoint = '/order';
const createOrder: ApiCallCreateOrder = async (request: OrderRequest) => {
  const response = await Api.post(createOrderEndpoint, request);
  return response;
};

export default createOrder;
