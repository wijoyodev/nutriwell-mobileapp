import React from 'react';
import { ScrollView } from 'react-native';
import RewardHeaderComponent from './components/RewardHeaderComponent';
import RedeemableRewardComponent from './components/RedeemableRewardComponent';
import InviteNetworkComponent from './components/InviteNetworkComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';

export type NetworkType = {
  name: string;
  level: number;
  network: number;
};

const networkList: NetworkType[] = [
  {
    name: 'Gill Lucy',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy B',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy C',
    level: 1,
    network: 500,
  },
];

export type RewardSummary = {
  redeemableReward: number;
  monthlyReward: number;
  totalReferenceNetwork: number;
  referralCode: string;
  referenceNetworkList: NetworkType[];
};

const reward: RewardSummary = {
  redeemableReward: 22500000,
  monthlyReward: 1600000,
  totalReferenceNetwork: 50,
  referralCode: 'YBSH21',
  referenceNetworkList: networkList,
};

const RewardHomeScreen = () => {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white }}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <RewardHeaderComponent />
      <RedeemableRewardComponent reward={reward} />
      <InviteNetworkComponent code={reward.referralCode} />
      <ReferenceNetworkComponent
        networkList={reward?.referenceNetworkList ?? []}
      />
    </ScrollView>
  );
};

export default RewardHomeScreen;
