import React from 'react';
import { ScrollView } from 'react-native';
import AccountHeaderComponent from './components/AccountHeaderComponent';
import UserComponent from './components/UserComponent';
import ProfileMenuComponent from './components/ProfileMenuComponent';
import Colors from 'themes/Colors';

const AccountHomeScreen = () => {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white }}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <AccountHeaderComponent />
      <UserComponent />
      <ProfileMenuComponent />
    </ScrollView>
  );
};

export default AccountHomeScreen;
