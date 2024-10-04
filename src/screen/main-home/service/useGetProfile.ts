import { useFocusEffect } from '@react-navigation/native';
import getUserById from 'network/auth/user-by-id';
import { useCallback, useState } from 'react';
import { setActive } from 'service/StorageUtils';
import { ProfileData } from 'service/Utils';

const useGetProfile = () => {
  const [profile, setProfile] = useState<ProfileData>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getUserById().then(response => {
        setLoading(false);
        console.log('Response user by id: ', response.result.data[0]);

        const active = response.result.data?.[0].status ?? false;
        const profileData: ProfileData = {
          email: response.result.data?.[0].email,
          name: response.result.data?.[0].full_name,
          gender: response.result.data?.[0].gender,
          birthDate: new Date(response.result.data?.[0].date_of_birth),
          phoneNumber: response.result.data?.[0].phone_number,
          imageUrl: response.result.data?.[0].avatar_url,
          userId: response.result.data?.[0].id.toString(),
          active,
        };

        setProfile(profileData);
        setActive(active);
      });
    }, []),
  );

  return { loading, profile };
};

export default useGetProfile;
