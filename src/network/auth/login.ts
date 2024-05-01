import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type LoginResponse = {
  user_id: number;
  email: string;
  full_name: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  avatar_url: string;
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
