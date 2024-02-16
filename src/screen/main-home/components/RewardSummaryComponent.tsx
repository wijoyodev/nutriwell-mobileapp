/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const RewardSummaryComponent = () => {
  return (
    <View
      style={{
        borderColor: Colors.black,
        borderWidth: 1,
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 12,
        display: 'flex',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 2,
          marginRight: 12,
          borderRightWidth: 1,
          borderColor: Colors.disabled,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 12,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'dollar'} size={10} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
                marginLeft: 4,
              }}>
              Total Reward
            </Text>
          </View>

          <Icon name={'angle-right'} color={Colors.black} />
        </View>

        <Text
          style={{
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          Rp21.500.000
        </Text>
      </View>

      <View
        style={{
          flex: 2,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 12,
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Icon name={'dollar'} size={10} />
            <Text
              style={{
                color: Colors.black,
                fontSize: 12,
                marginLeft: 4,
              }}>
              Reward Bulan Ini
            </Text>
          </View>

          <Icon name={'angle-right'} color={Colors.black} />
        </View>

        <Text
          style={{
            color: Colors.black,
            fontWeight: 'bold',
            fontSize: 14,
          }}>
          Rp4.500.000
        </Text>
      </View>
    </View>
  );
};

export default RewardSummaryComponent;
