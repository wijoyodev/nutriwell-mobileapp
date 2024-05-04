import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { ShippingOption } from 'screen/check-out/CheckOutScreen';

export type TrackShipmentResponse = {
  tracking_id: string;
  waybill_id: string;
  company: string;
  history: {
    service_type: string;
    status: string;
    note: string;
    updated_at: string;
  }[];
};

type ApiCallGetTrackShipment = (
  shipmentNumber: string,
) => Promise<PublicAPIResponse<TrackShipmentResponse>>;

const getTrackShipmentEndpoint = '/order/track/';
const getTrackShipment: ApiCallGetTrackShipment = async (
  shipmentNumber: string,
) => {
  const response = await Api.get(
    `${getTrackShipmentEndpoint}/${shipmentNumber}`,
  );
  return response;
};

export default getTrackShipment;
