import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { PaymentMethod } from 'screen/check-out/CheckOutScreen';

type ApiCallGetPaymentMethod = () => Promise<
  PublicAPIResponse<PaymentMethod[]>
>;

const getPaymentMethodEndpoint = '/payment-method';
const getPaymentMethod: ApiCallGetPaymentMethod = async () => {
  const response = await Api.get(getPaymentMethodEndpoint);
  return response;
};

export default getPaymentMethod;
