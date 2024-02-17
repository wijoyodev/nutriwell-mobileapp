import React from 'react';
import { Text, View } from 'react-native';
import AccountHeaderComponent from './components/AccountHeaderComponent';
import UserComponent from './components/UserComponent';
import ProfileMenuComponent from './components/ProfileMenuComponent';

const AccountHomeScreen = () => {
  return (
    <View>
      <AccountHeaderComponent />
      <UserComponent />
      <ProfileMenuComponent />
    </View>
  );
};

export default AccountHomeScreen;
