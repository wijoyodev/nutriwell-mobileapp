/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomProfileImage from 'components/CustomProfileImage';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';

export type NetworkInfoProps = {
  network: NetworkType;
  index: number;
};

const NetworkInfoComponent: React.FC<NetworkInfoProps> = ({
  index,
  network,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopWidth: index > 0 ? 1 : 0,
        borderTopColor: Colors.grey,
        paddingVertical: 12,
      }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <CustomProfileImage size={40} imageUrl={network.imageUrl} />
        <View>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', color: Colors.black }}>
            {network.name}
          </Text>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Icon name={'people-outline'} />
              <Text>{network.network} network</Text>
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Icon name={'person-outline'} />
              <Text>{network.uplineName}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NetworkInfoComponent;
