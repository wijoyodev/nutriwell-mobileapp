import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import RewardHeaderComponent from './components/RewardHeaderComponent';
import RedeemableRewardComponent from './components/RedeemableRewardComponent';
import InviteNetworkComponent from './components/InviteNetworkComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';
import useGetRewardSummary from './service/useGetRewardSummary';
import { getReferralCode } from 'service/StorageUtils';

export type NetworkType = {
  id: number;
  userId: number;
  name: string;
  level: number;
  network: number;
  imageUrl?: string;
  uplineName?: string;
};

export type RewardSummary = {
  totalReward: number;
  redeemableReward: number;
  monthlyReward: number;
};

export type NetworkSummary = {
  totalReferenceNetwork: number;
  referenceNetworkList: NetworkType[];
};

const RewardHomeScreen = () => {
  const {
    loading,
    rewardSummary: reward,
    networkSummary,
  } = useGetRewardSummary();

  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    getReferralCode().then(setReferralCode);
  }, []);

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
          <RedeemableRewardComponent
            reward={reward}
            networkSummary={networkSummary}
          />
          <InviteNetworkComponent code={referralCode ?? ''} />
        </>
      )}

      <ReferenceNetworkComponent
        networkList={networkSummary?.referenceNetworkList ?? []}
      />
    </ScrollView>
  );
};

export default RewardHomeScreen;
