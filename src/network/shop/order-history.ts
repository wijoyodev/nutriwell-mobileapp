import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { OrderHistory } from 'screen/order-history/OrderHistoryScreen';

type ApiCallGetOrderHistory = () => Promise<PublicAPIResponse<OrderHistory[]>>;

const getOrderHistoryEndpoint = '/order/history';
const getOrderHistory: ApiCallGetOrderHistory = async () => {
  const response = await Api.get(getOrderHistoryEndpoint);
  return response;
};

export default getOrderHistory;
