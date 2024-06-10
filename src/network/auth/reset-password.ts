import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ResetPasswordResponse = {
  message: string;
};

export type ResetPasswordRequest = {
  email: string;
};

type ApiCallResetPassword = (
  request: ResetPasswordRequest,
) => Promise<PublicAPIResponse<ResetPasswordResponse>>;

const resetPasswordEndpoint = '/reset-password';
const resetPassword: ApiCallResetPassword = async (
  request: ResetPasswordRequest,
) => {
  const response = await Api.post(resetPasswordEndpoint, request);
  return response;
};

export default resetPassword;
