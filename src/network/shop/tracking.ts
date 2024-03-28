import Api from 'network/Api';
import { PublicAPIResponse } from 'network/model';
import { TrackingTimelineItem } from 'screen/tracking/components/TrackingComponent';

export type TrackingResponse = {
  resi: string;
  items: TrackingTimelineItem[];
};

type ApiCallGetTracking = () => Promise<PublicAPIResponse<TrackingResponse>>;

const getTrackingEndpoint = '/tracking';
const getTracking: ApiCallGetTracking = async () => {
  const response = await Api.get(getTrackingEndpoint);
  return response;
};

export default getTracking;
