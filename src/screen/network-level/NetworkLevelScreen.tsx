/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import NetworkInfoComponent from './components/NetworkInfoComponent';
import Colors from 'themes/Colors';
import { NetworkType } from 'screen/reward-home/RewardHomeScreen';
import useGetNetworkLevel from './service/useGetNetworkLevel';

type NetworkLevelProps = {
  route: RouteProp<ParamListBase>;
};

const NetworkLevelScreen: React.FC<NetworkLevelProps> = ({ route }) => {
  const { level, user_id } = route.params;
  const [offset, setOffset] = useState(0);
  const { loading, network: networkList } = useGetNetworkLevel(
    level,
    user_id,
    offset,
  );
  const { setOptions } = useNavigation<NavigationProp<ParamListBase>>();

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
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {(networkList?.length ?? 0) > 0 ? (
        <FlatList
          onEndReached={() => {
            if (networkList.length > 0) {
              setOffset(networkList.length);
            }
          }}
          showsVerticalScrollIndicator={false}
          data={networkList}
          renderItem={renderItem}
        />
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

export default NetworkLevelScreen;
