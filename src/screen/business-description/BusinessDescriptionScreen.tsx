/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView } from 'react-native';
import Colors from 'themes/Colors';
import BusinessIntroductionComponent from './components/BusinessIntroductionComponent';
import MemberSchemaComponent from './components/MemberSchemaComponent';
import MemberBenefitComponent from './components/MemberBenefitComponent';
import RewardInfoComponent from './components/RewardInfoComponent';
import ClaimRewardComponent from './components/ClaimRewardComponent';
import TrackInfoComponent from './components/TrackInfoComponent';

const BusinessDescriptionScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        padding: 16,
      }}>
      <BusinessIntroductionComponent />
      <MemberSchemaComponent />
      <MemberBenefitComponent />
      <RewardInfoComponent />
      <ClaimRewardComponent />
      <TrackInfoComponent />
    </ScrollView>
  );
};

export default BusinessDescriptionScreen;
