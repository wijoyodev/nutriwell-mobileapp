import { useFocusEffect } from '@react-navigation/native';
import getProfile, { ProfileResponse } from 'network/auth/profile';
import { useCallback, useState } from 'react';
import Utils, { ProfileData } from 'service/Utils';

const useGetProfile = () => {
  const [profile, setProfile] = useState<ProfileData>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      Utils.getProfileFromStorage().then(response => {
        setLoading(false);
        setProfile(response);
      });
    }, []),
  );

  return { loading, profile };
};

export default useGetProfile;
