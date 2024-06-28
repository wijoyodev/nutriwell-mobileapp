import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { OrderHistoryItemResponse } from './order-history';

export type HistoryDetailResponse = {
  data: OrderHistoryItemResponse[];
  tax_detail: {
    ppn_tax: number;
  };
};

type ApiCallGetOrderHistoryDetail = (
  id: string,
) => Promise<PublicAPIResponse<HistoryDetailResponse>>;

const getOrderHistoryDetailEndpoint = '/order/';
const getOrderHistoryDetail: ApiCallGetOrderHistoryDetail = async (
  id: string,
) => {
  const response = await Api.get(getOrderHistoryDetailEndpoint + id);
  return response;
};

export default getOrderHistoryDetail;
