/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const RewardSummaryComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingBottom: 16,
        backgroundColor: Colors.blue,
      }}>
      <TouchableOpacity
        onPress={() => navigate('reward-home')}
        style={{
          backgroundColor: Colors.white,
          borderColor: Colors.black,
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
              <MaterialIcon name={'paid'} size={10} />
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 12,
                  marginLeft: 4,
                }}>
                Total Reward
              </Text>
            </View>

            <Icon name={'chevron-forward-outline'} color={Colors.black} />
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
              <MaterialIcon name={'attach-money'} size={10} />
              <Text
                style={{
                  color: Colors.black,
                  fontSize: 12,
                  marginLeft: 4,
                }}>
                Reward Bulan Ini
              </Text>
            </View>

            <Icon name={'chevron-forward-outline'} color={Colors.black} />
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
      </TouchableOpacity>
    </View>
  );
};

export default RewardSummaryComponent;
