/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NetworkType } from 'screen/reward-home/components/ReferenceNetworkComponent';

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
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View>
          <Text
            style={{ fontSize: 14, fontWeight: 'bold', color: Colors.black }}>
            {network.name}
          </Text>
          <View style={{ flexDirection: 'row', gap: 16 }}>
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Icon name={'star'} />
              <Text>Level {network.level}</Text>
            </View>

            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Icon name={'user'} />
              <Text>{network.network} network</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NetworkInfoComponent;
