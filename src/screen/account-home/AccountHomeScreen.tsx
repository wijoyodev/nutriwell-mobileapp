import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import AccountHeaderComponent from './components/AccountHeaderComponent';
import UserComponent from './components/UserComponent';
import ProfileMenuComponent from './components/ProfileMenuComponent';
import Colors from 'themes/Colors';
import useGetProfile from './service/useGetProfile';

const AccountHomeScreen = () => {
  const { loading, profile } = useGetProfile();

  return (
    <ScrollView
      style={{ backgroundColor: Colors.white }}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <AccountHeaderComponent />
      {loading && (
        <View style={{ backgroundColor: Colors.blue }}>
          <ActivityIndicator color={Colors.white} size={'large'} />
        </View>
      )}
      {profile !== undefined && <UserComponent profile={profile} />}

      <ProfileMenuComponent />
    </ScrollView>
  );
};

export default AccountHomeScreen;
