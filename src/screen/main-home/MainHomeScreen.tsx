/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';
import Colors from 'themes/Colors';
import RewardSummaryComponent from './components/RewardSummaryComponent';
import HeaderHomeComponent from './components/HeaderHomeComponent';
import InviteFriendComponent from './components/InviteFriendComponent';
import LearnBusinessComponent from './components/LearnBusinessComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';

const MainHomeScreen = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 16,
      }}>
      <HeaderHomeComponent />
      <RewardSummaryComponent />
      <InviteFriendComponent />
      <LearnBusinessComponent />
      <ReferenceNetworkComponent />
    </ScrollView>
  );
};

export default MainHomeScreen;
