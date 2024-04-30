import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { getEmail, getRefreshToken } from 'service/StorageUtils';

export type LogoutResponse = {};

export type LogoutRequest = {
  email: string | null;
  refresh_token: string | null;
};

type ApiCallLogout = () => Promise<PublicAPIResponse<LogoutResponse>>;

const logoutEndpoint = '/logout';
const logout: ApiCallLogout = async () => {
  const email = await getEmail();
  const refresh_token = await getRefreshToken();

  const request: LogoutRequest = {
    email,
    refresh_token,
  };

  const response = await Api.post(logoutEndpoint, request);
  return response;
};

export default logout;
