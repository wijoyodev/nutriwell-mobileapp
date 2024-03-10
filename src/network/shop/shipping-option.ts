import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { ShippingOption } from 'screen/check-out/CheckOutScreen';

type ApiCallGetShippingOption = () => Promise<
  PublicAPIResponse<ShippingOption[]>
>;

const getShippingOptionEndpoint = '/shipping-option';
const getShippingOption: ApiCallGetShippingOption = async () => {
  const response = await Api.get(getShippingOptionEndpoint);
  return response;
};

export default getShippingOption;
