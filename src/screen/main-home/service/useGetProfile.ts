import { useFocusEffect } from '@react-navigation/native';
import getProfile, { ProfileResponse } from 'network/auth/profile';
import { useCallback, useState } from 'react';

const useGetProfile = () => {
  const [profile, setProfile] = useState<ProfileResponse>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getProfile().then(response => {
        setLoading(false);
        setProfile(response.data);
      });
    }, []),
  );

  return { loading, profile };
};

export default useGetProfile;
