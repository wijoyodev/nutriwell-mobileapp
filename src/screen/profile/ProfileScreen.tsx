/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import Colors from 'themes/Colors';
import ProfileInfoComponent from './components/ProfileInfoComponent';
import BankAccountComponent from './components/BankAccountComponent';
import Icon from 'react-native-vector-icons/Octicons';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EDIT_PROFILE_SCREEN } from 'navigation/constants';
import useGetProfile from './service/useGetProfile';
import { ProfileForm } from 'screen/register-data/components/InputProfileComponent';
import { ProfileResponse } from 'network/auth/profile';

const ProfileScreen = () => {
  const { setOptions, navigate } =
    useNavigation<NavigationProp<ParamListBase>>();

  const { loading, profile } = useGetProfile();

  useEffect(() => {
    setOptions({
      headerRight: iconHeaderRight,
    });
  }, [profile]);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const convertProfileForm: (a: ProfileResponse) => ProfileForm = (
    data: ProfileResponse,
  ) => {
    const profileForm: ProfileForm = {
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      birthDate: data.birthDate,
      gender: data.gender,
    };
    return profileForm;
  };

  const iconHeaderRight = () => {
    if (profile === undefined) {
      return <></>;
    }
    return (
      <TouchableOpacity
        onPress={() =>
          navigate(EDIT_PROFILE_SCREEN, {
            data: convertProfileForm(profile),
          })
        }
        style={{
          marginRight: 16,
          padding: 12,
          backgroundColor: Colors.grey,
          borderRadius: 12,
        }}>
        <Icon name={'pencil'} color={Colors.blue} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {!loading && profile !== undefined && (
        <ProfileInfoComponent profile={profile} />
      )}

      <BankAccountComponent />
    </View>
  );
};

export default ProfileScreen;
