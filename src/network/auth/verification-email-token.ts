import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type VerificationEmailTokenResponse = {
  email: string;
  referrer_code: string;
};

type ApiCallVerificationEmailToken = (
  token: string,
) => Promise<PublicAPIResponse<VerificationEmailTokenResponse>>;

const verificationEmailTokenEndpoint = '/verification-email';
const verificationEmailToken: ApiCallVerificationEmailToken = async (
  token: string,
) => {
  const response = await Api.get(`${verificationEmailTokenEndpoint}/${token}`);
  return response;
};

export default verificationEmailToken;
