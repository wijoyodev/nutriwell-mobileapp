/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';
import Colors from 'themes/Colors';
import RewardSummaryComponent from './components/RewardSummaryComponent';
import HeaderHomeComponent from './components/HeaderHomeComponent';
import InviteFriendComponent from './components/InviteFriendComponent';
import LearnBusinessComponent from './components/LearnBusinessComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';
import CarouselComponent from './components/CarouselComponent';

const MainHomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <HeaderHomeComponent />
      <RewardSummaryComponent />
      <CarouselComponent />
      <InviteFriendComponent />
      <LearnBusinessComponent />
      <ReferenceNetworkComponent />
    </ScrollView>
  );
};

export default MainHomeScreen;
