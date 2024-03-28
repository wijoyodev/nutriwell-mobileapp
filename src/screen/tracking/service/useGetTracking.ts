import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getTracking, { TrackingResponse } from 'network/shop/tracking';

const useGetTracking = () => {
  const [tracking, setTracking] = useState<TrackingResponse>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getTracking().then(response => {
        setLoading(false);
        setTracking(response.data);
      });
    }, []),
  );

  return { loading, tracking };
};

export default useGetTracking;
