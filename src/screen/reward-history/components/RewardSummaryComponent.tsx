/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryRewardSummary } from '../RewardHistoryScreen';
import Utils from 'service/Utils';

export type RewardSummaryComponentProps = {
  summary: HistoryRewardSummary;
};

const RewardSummaryComponent: React.FC<RewardSummaryComponentProps> = ({ summary }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 12 }}>TOTAL REWARD</Text>
      <Text
        style={{
          fontSize: 20,
          color: Colors.black,
          fontWeight: 'bold',
          marginTop: 4,
        }}>
        {Utils.getPriceString(summary.totalReward)}
      </Text>

      <View style={{ flexDirection: 'row', marginTop: 16 }}>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 12 }}>BERHASIL DICAIRKAN</Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontWeight: 'bold',
              marginTop: 4,
            }}>
            {Utils.getPriceString(summary.successWithdraw)}
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 12 }}>BELUM DICAIRKAN</Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontWeight: 'bold',
              marginTop: 4,
            }}>
            {Utils.getPriceString(
              summary.totalReward - summary.successWithdraw,
            )}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RewardSummaryComponent;
