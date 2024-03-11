/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Colors from 'themes/Colors';
import NetworkComponent from './components/NetworkComponent';
import { useFocusEffect } from '@react-navigation/native';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';

const networkList: NetworkType[] = [
  {
    name: 'Gill Lucy',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy B',
    level: 1,
    network: 500,
  },
  {
    name: 'Gill Lucy C',
    level: 1,
    network: 500,
  },
];

const ReferenceNetworkScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const renderItem = (info: ListRenderItemInfo<NetworkType>) => {
    return <NetworkComponent network={info.item} index={info.index} />;
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.white, paddingHorizontal: 16 }}>
      {networkList.length > 0 ? (
        <FlatList data={networkList} renderItem={renderItem} />
      ) : (
        <View
          style={{
            flex: 0.75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/empty-box.png')}
            style={{ height: 100, width: 100, marginBottom: 24 }}
          />
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Belum memiliki reference network. Yuk, ajak temanmu!
          </Text>
        </View>
      )}
    </View>
  );
};

export default ReferenceNetworkScreen;
