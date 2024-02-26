/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { View } from 'react-native';
import Colors from 'themes/Colors';
import ProfileInfoComponent from './components/ProfileInfoComponent';
import BankAccountComponent from './components/BankAccountComponent';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { EDIT_PROFILE_SCREEN } from 'navigation/constants';

const ProfileScreen = () => {
  const { setOptions, navigate } =
    useNavigation<NavigationProp<ParamListBase>>();
  useEffect(() => {
    setOptions({
      headerRight: iconHeaderRight,
    });
  }, []);

  const iconHeaderRight = () => {
    return (
      <TouchableOpacity
        onPress={() => navigate(EDIT_PROFILE_SCREEN)}
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
      <ProfileInfoComponent />
      <BankAccountComponent />
    </View>
  );
};

export default ProfileScreen;
