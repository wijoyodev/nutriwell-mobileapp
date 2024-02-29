/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { NetworkType } from 'screen/reward-home/components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { NETWORK_DETAIL_SCREEN } from 'navigation/constants';

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
      onPress={() => navigate(NETWORK_DETAIL_SCREEN)}
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
        <Image
          source={require('../../../assets/images/product_image.png')}
          style={{
            height: 40,
            width: 40,
            borderRadius: 40,
          }}
        />
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

      <Icon name={'angle-right'} color={Colors.black} />
    </TouchableOpacity>
  );
};

export default NetworkComponent;
