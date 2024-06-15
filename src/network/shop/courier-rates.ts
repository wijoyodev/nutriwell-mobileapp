import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';

export type CalculateCourierRatesRequest = {
  destination_postal_code: number;
  items: {
    name: string;
    value: number;
    weight: number;
    quantity: number;
  }[];
};

export type CalculateCourierRatesResponse = {
  courier_name: string;
  courier_service_name: string;
  company: string;
  service_type: string;
  duration: string;
  shipment_duration_range: string;
  price: number;
  type: string;
};

type ApiCallCalculateCourierRates = (
  request: CalculateCourierRatesRequest,
) => Promise<PublicAPIResponse<CalculateCourierRatesResponse[]>>;

const CalculateCourierRatesEndpoint = '/courier-rates';
const calculateCourierRates: ApiCallCalculateCourierRates = async (
  request: CalculateCourierRatesRequest,
) => {
  const response = await Api.post(CalculateCourierRatesEndpoint, request);
  return response;
};

export default calculateCourierRates;
