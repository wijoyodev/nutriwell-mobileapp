import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type ResetPasswordTokenResponse = {
  user_id: string;
  token: string;
};

type ApiCallResetPasswordToken = (
  token: string,
) => Promise<PublicAPIResponse<ResetPasswordTokenResponse>>;

const resetPasswordTokenEndpoint = '/reset-password';
const resetPasswordToken: ApiCallResetPasswordToken = async (token: string) => {
  const response = await Api.get(`${resetPasswordTokenEndpoint}/${token}`);
  return response;
};

export default resetPasswordToken;
