/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { NETWORK_DETAIL_SCREEN } from 'navigation/constants';
import CustomProfileImage from 'components/CustomProfileImage';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';

export type NetworkComponentProps = {
  network: NetworkType;
  index: number;
};

const NetworkComponent: React.FC<NetworkComponentProps> = ({
  network,
  index,
}) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() =>
        navigate(NETWORK_DETAIL_SCREEN, {
          id: network.userId,
          level: network.level,
        })
      }
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: index > 0 ? 1 : 0,
        borderTopColor: Colors.grey,
        paddingVertical: 12,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: Colors.black,
          }}>
          #{index + 1}
        </Text>
        <CustomProfileImage size={40} imageUrl={network.imageUrl} />
        <View>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', color: Colors.black }}>
            {network.name}
          </Text>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <MaterialIcon name={'star-circle-outline'} />
              <Text>Level {network.level}</Text>
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Icon name={'people-outline'} />
              <Text>{network.network} network</Text>
            </View>
          </View>
        </View>
      </View>

      <Icon name={'chevron-forward-outline'} size={16} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default NetworkComponent;
