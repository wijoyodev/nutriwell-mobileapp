import React from 'react';
import { ScrollView } from 'react-native';
import AccountHeaderComponent from './components/AccountHeaderComponent';
import UserComponent from './components/UserComponent';
import ProfileMenuComponent from './components/ProfileMenuComponent';

const AccountHomeScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <AccountHeaderComponent />
      <UserComponent />
      <ProfileMenuComponent />
    </ScrollView>
  );
};

export default AccountHomeScreen;
