/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import RewardHeaderComponent from './components/RewardHeaderComponent';
import RedeemableRewardComponent from './components/RedeemableRewardComponent';
import InviteNetworkComponent from './components/InviteNetworkComponent';
import ReferenceNetworkComponent from './components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';
import useGetRewardSummary from './service/useGetRewardSummary';
import { getActive, getReferralCode } from 'service/StorageUtils';
import CustomButton from 'components/CustomButton';
import CustomModal, { CustomModalHandle } from 'components/CustomModal';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';

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
  active?: boolean;
};

export type NetworkSummary = {
  totalReferenceNetwork: number;
  referenceNetworkList: NetworkType[];
};

const RewardHomeScreen = () => {
  const modalRef = useRef<CustomModalHandle | null>();
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();

  const {
    loading,
    rewardSummary: reward,
    networkSummary,
  } = useGetRewardSummary();

  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    getReferralCode().then(setReferralCode);
  }, []);

  useFocusEffect(() => {
    getActive().then(active => {
      if (!active) {
        modalRef.current?.openModal();
      }
    });
  });

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

      <CustomModal ref={el => (modalRef.current = el)}>
        <View
          style={{
            backgroundColor: Colors.white,
            padding: 24,
            borderRadius: 16,
          }}>
          <View style={{ marginBottom: 24, alignItems: 'center' }}>
            <MaterialIcon name={'info'} color={Colors.orangeIcon} size={70} />
          </View>

          <Text
            style={{
              fontSize: 16,
              color: Colors.black,
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: 12,
            }}>
            Saat ini Anda tidak aktif
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              textAlign: 'center',
              marginBottom: 24,
            }}>
            Silakan lakukan pembelian untuk dapat mengaktifkan kembali member
            Anda dan mendapatkan komisi
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <CustomButton
              containerStyle={{
                flex: 1,
              }}
              onPress={() => {
                goBack();
                // onDelete();
                modalRef.current?.closeModal();
              }}
              text={'TUTUP'}
              backgroundColor={Colors.blue}
            />
          </View>
        </View>
      </CustomModal>
    </ScrollView>
  );
};

export default RewardHomeScreen;
