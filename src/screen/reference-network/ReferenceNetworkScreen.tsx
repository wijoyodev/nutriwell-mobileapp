/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import { NetworkType } from 'screen/reward-home/components/ReferenceNetworkComponent';
import Colors from 'themes/Colors';
import NetworkComponent from './components/NetworkComponent';

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
  const renderItem = (info: ListRenderItemInfo<NetworkType>) => {
    return <NetworkComponent network={info.item} index={info.index} />;
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.white, paddingHorizontal: 16 }}>
      <FlatList data={networkList} renderItem={renderItem} />
    </View>
  );
};

export default ReferenceNetworkScreen;
