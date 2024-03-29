/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { REWARD_HISTORY_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import Colors from 'themes/Colors';

const RewardHeaderComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: Colors.blue,
        alignItems: 'center',
      }}>
      <View style={{ flex: 3 }} />
      <View
        style={{
          // width,
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 16, color: Colors.white }}>Reward Saya</Text>
      </View>

      <View
        style={{ flexDirection: 'row', flex: 3, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => navigate(REWARD_HISTORY_SCREEN)}
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 12,
          }}>
          <Icon name={'clock-rotate-left'} color={Colors.darkBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RewardHeaderComponent;
