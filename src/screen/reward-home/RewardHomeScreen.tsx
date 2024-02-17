import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import RewardHeaderComponent from './components/RewardHeaderComponent';
import RedeemableRewardComponent from './components/RedeemableRewardComponent';
import InviteNetworkComponent from './components/InviteNetworkComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';

const RewardHomeScreen = () => {
  return (
    <ScrollView>
      <RewardHeaderComponent />
      <RedeemableRewardComponent />
      <InviteNetworkComponent />
      <ReferenceNetworkComponent />
    </ScrollView>
  );
};

export default RewardHomeScreen;
