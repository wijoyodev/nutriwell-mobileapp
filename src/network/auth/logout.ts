import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type LogoutResponse = {};

export type LogoutRequest = {
  email: string;
  refresh_token: string;
};

type ApiCallLogout = (
  request: LogoutRequest,
) => Promise<PublicAPIResponse<LogoutResponse>>;

const logoutEndpoint = '/logout';
const logout: ApiCallLogout = async (request: LogoutRequest) => {
  const response = await Api.post(logoutEndpoint, request);
  return response;
};

export default logout;
