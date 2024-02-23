/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const RewardSummaryComponent = () => {
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
        Rp21.500.000
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
            Rp20.000.000
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
            Rp1.500.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RewardSummaryComponent;
