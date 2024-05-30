/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  ActivityIndicator,
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
import useGetAllNetwork from './service/useGetAllNetwork';

const ReferenceNetworkScreen = () => {
  const [offset, setOffset] = useState(0);
  const { loading, network } = useGetAllNetwork(offset);

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
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {(network?.length ?? 0) > 0 ? (
        <FlatList
          onEndReached={() => {
            if (network.length > 0) {
              setOffset(network.length);
            }
          }}
          showsVerticalScrollIndicator={false}
          data={network}
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

export default ReferenceNetworkScreen;
