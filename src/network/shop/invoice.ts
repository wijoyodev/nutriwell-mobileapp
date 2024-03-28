import { InvoiceResponse } from 'mock-api/constant';
import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

type ApiCallGetInvoice = () => Promise<PublicAPIResponse<InvoiceResponse>>;

const getInvoiceEndpoint = '/invoice';
const getInvoice: ApiCallGetInvoice = async () => {
  const response = await Api.get(getInvoiceEndpoint);
  return response;
};

export default getInvoice;
