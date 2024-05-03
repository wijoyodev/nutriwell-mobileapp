import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { OrderHistoryResponse } from './order-history';

type ApiCallGetOrderHistoryDetail = (
  id: string,
) => Promise<PublicAPIResponse<OrderHistoryResponse[]>>;

const getOrderHistoryDetailEndpoint = '/order/';
const getOrderHistoryDetail: ApiCallGetOrderHistoryDetail = async (
  id: string,
) => {
  const response = await Api.get(getOrderHistoryDetailEndpoint + id);
  return response;
};

export default getOrderHistoryDetail;
