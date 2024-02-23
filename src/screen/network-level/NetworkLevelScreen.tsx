/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import { NetworkType } from 'screen/reward-home/components/ReferenceNetworkComponent';
import NetworkInfoComponent from './components/NetworkInfoComponent';
import Colors from 'themes/Colors';

type NetworkLevelProps = {
  route: RouteProp<ParamListBase>;
};

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

const NetworkLevelScreen: React.FC<NetworkLevelProps> = ({ route }) => {
  const { setOptions } = useNavigation<NavigationProp<ParamListBase>>();
  const { level } = route.params;

  useEffect(() => {
    setOptions({
      headerTitle: `Level ${level}`,
    });
  }, [level]);

  const renderItem = (info: ListRenderItemInfo<NetworkType>) => {
    return <NetworkInfoComponent index={info.index} network={info.item} />;
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: Colors.white, paddingHorizontal: 16 }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={networkList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default NetworkLevelScreen;
