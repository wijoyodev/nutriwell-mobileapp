/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Utils from 'service/Utils';

export type RewardSummaryComponentProps = {
  totalReward: number;
  totalWithdraw: number;
};

const RewardSummaryComponent: React.FC<RewardSummaryComponentProps> = ({
  totalReward,
  totalWithdraw,
}) => {
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
        {Utils.getPriceString(totalReward)}
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
            {Utils.getPriceString(totalWithdraw)}
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
            {Utils.getPriceString(totalReward - totalWithdraw)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RewardSummaryComponent;
