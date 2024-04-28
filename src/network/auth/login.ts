import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type LoginResponse = {
  email: string;
  full_name: string;
  token: string;
  refreshToken: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

type ApiCallLogin = (
  request: LoginRequest,
) => Promise<PublicAPIResponse<LoginResponse>>;

const loginEndpoint = '/login';
const login: ApiCallLogin = async (request: LoginRequest) => {
  const response = await Api.post(loginEndpoint, request);
  return response;
};

export default login;
