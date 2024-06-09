import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type VerificationEmailResponse = {
  status: string;
};

export type VerificationEmailRequest = {
  email: string;
  referrer_code: string;
};

type ApiCallVerificationEmail = (
  request: VerificationEmailRequest,
) => Promise<PublicAPIResponse<VerificationEmailResponse>>;

const verificationEmailEndpoint = '/verification-email';
const verificationEmail: ApiCallVerificationEmail = async (
  request: VerificationEmailRequest,
) => {
  const response = await Api.post(verificationEmailEndpoint, request);
  return response;
};

export default verificationEmail;
