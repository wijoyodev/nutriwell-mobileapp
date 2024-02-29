import React from 'react';
import { ScrollView } from 'react-native';
import RewardHeaderComponent from './components/RewardHeaderComponent';
import RedeemableRewardComponent from './components/RedeemableRewardComponent';
import InviteNetworkComponent from './components/InviteNetworkComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';

const RewardHomeScreen = () => {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white }}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <RewardHeaderComponent />
      <RedeemableRewardComponent />
      <InviteNetworkComponent />
      <ReferenceNetworkComponent />
    </ScrollView>
  );
};

export default RewardHomeScreen;
