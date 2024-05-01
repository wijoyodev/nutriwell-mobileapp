import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type RegisterResponse = {
  accessToken: string;
};

export type RegisterRequest = {
  email: string;
  referrer_code: string;
  password: string;
  confirm_password: string;
  phone_number_country: string;
  phone_number: string;
  gender: string;
  date_of_birth: Date;
  avatar?: any;
  role?: string;
  full_name: string;
};

type ApiCallRegister = (
  request: RegisterRequest,
) => Promise<PublicAPIResponse<RegisterResponse>>;

const registerEndpoint = '/register';
const register: ApiCallRegister = async (request: RegisterRequest) => {
  const response = await Api.postWithForm(registerEndpoint, request);
  return response;
};

export default register;
