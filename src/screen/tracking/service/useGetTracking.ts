import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getTrackShipment, {
  TrackShipmentResponse,
} from 'network/shop/track-shipment';

const useGetTracking = (shipmentNumber: string) => {
  const [tracking, setTracking] = useState<TrackShipmentResponse>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getTrackShipment(shipmentNumber).then(response => {
        console.log('Response track: ', response.result);
        setLoading(false);
        setTracking(response.result);
      });
    }, [shipmentNumber]),
  );

  const refetch = () => {
    getTrackShipment(shipmentNumber).then(response => {
      setLoading(false);
      setTracking(response.result);
    });
  };

  return { loading, tracking, refetch };
};

export default useGetTracking;
