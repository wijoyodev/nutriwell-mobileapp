import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import RewardHeaderComponent from './components/RewardHeaderComponent';
import RedeemableRewardComponent from './components/RedeemableRewardComponent';
import InviteNetworkComponent from './components/InviteNetworkComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';
import useGetRewardSummary from './service/useGetRewardSummary';

export type NetworkType = {
  name: string;
  level: number;
  network: number;
};

export type RewardSummary = {
  redeemableReward: number;
  monthlyReward: number;
  totalReferenceNetwork: number;
  referralCode: string;
  referenceNetworkList: NetworkType[];
};

const RewardHomeScreen = () => {
  const { loading, rewardSummary: reward } = useGetRewardSummary();
  return (
    <ScrollView
      style={{ backgroundColor: Colors.white }}
      stickyHeaderIndices={[0]}
      showsVerticalScrollIndicator={false}>
      <RewardHeaderComponent />
      {loading && (
        <View style={{ backgroundColor: Colors.blue }}>
          <ActivityIndicator color={Colors.white} size={'large'} />
        </View>
      )}
      {reward && (
        <>
          <RedeemableRewardComponent reward={reward} />
          <InviteNetworkComponent code={reward?.referralCode ?? ''} />
        </>
      )}

      <ReferenceNetworkComponent
        networkList={reward?.referenceNetworkList ?? []}
      />
    </ScrollView>
  );
};

export default RewardHomeScreen;
