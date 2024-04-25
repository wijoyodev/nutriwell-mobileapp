import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { HistoryDetail } from 'screen/history-detail/HistoryDetailScreen';

type ApiCallGetOrderHistoryDetail = () => Promise<
  PublicAPIResponse<HistoryDetail>
>;

const getOrderHistoryDetailEndpoint = '/order/history/id';
const getOrderHistoryDetail: ApiCallGetOrderHistoryDetail = async () => {
  const response = await Api.get(getOrderHistoryDetailEndpoint);
  return response;
};

export default getOrderHistoryDetail;
