/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import ProfileInfoComponent from './components/ProfileInfoComponent';
import BankAccountComponent from './components/BankAccountComponent';

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ProfileInfoComponent />
      <BankAccountComponent />
    </View>
  );
};

export default ProfileScreen;
