import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getAccessToken, getRefreshToken } from 'service/StorageUtils';

export type RefreshResponse = {
  token: string;
};

export type RefreshRequest = {
  token: string;
  refresh_token: string;
};

type ApiCallRefresh = () => Promise<PublicAPIResponse<RefreshResponse>>;

const refreshEndpoint = '/refresh';
const refresh: ApiCallRefresh = async () => {
  const token = await getAccessToken();
  const refresh_token = await getRefreshToken();

  const request: RefreshRequest = {
    token,
    refresh_token,
  };

  const response = await Api.post(refreshEndpoint, request);
  return response;
};

export default refresh;
