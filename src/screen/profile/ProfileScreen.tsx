/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { StatusBar, View } from 'react-native';
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

const profile: ProfileForm = {
  name: 'John',
  email: 'johndoe@gmail.com',
  birthDate: new Date(),
  phoneNumber: '(+62) 81031923',
  gender: 'male',
};

const ProfileScreen = () => {
  const { setOptions, navigate } =
    useNavigation<NavigationProp<ParamListBase>>();
  useEffect(() => {
    setOptions({
      headerRight: iconHeaderRight,
    });
  }, []);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const iconHeaderRight = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigate(EDIT_PROFILE_SCREEN, {
            data: profile,
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
      <ProfileInfoComponent profile={profile} />
      <BankAccountComponent />
    </View>
  );
};

export default ProfileScreen;
