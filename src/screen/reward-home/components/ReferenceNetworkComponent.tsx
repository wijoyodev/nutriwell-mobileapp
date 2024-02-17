/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export type NetworkType = {
  name: string;
  level: number;
  network: number;
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

const ReferenceNetworkComponent = () => {
  const renderItem = (info: ListRenderItemInfo<NetworkType>) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTopWidth: info.index > 0 ? 1 : 0,
          borderTopColor: Colors.grey,
          paddingVertical: 12,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: Colors.black,
              marginRight: 12,
            }}>
            #{info.index + 1}
          </Text>
          <View>
            <Text
              style={{ fontSize: 14, fontWeight: 'bold', color: Colors.black }}>
              {info.item.name}
            </Text>
            <View style={{ flexDirection: 'row', gap: 16 }}>
              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Icon name={'star'} />
                <Text>Level {info.item.level}</Text>
              </View>

              <View
                style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <Icon name={'user'} />
                <Text>{info.item.network} network</Text>
              </View>
            </View>
          </View>
        </View>

        <Icon name={'angle-right'} color={Colors.black} />
      </View>
    );
  };

  return (
    <View
      style={{
        marginVertical: 16,
        marginHorizontal: 16,
        padding: 16,
        paddingBottom: 0,
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 16,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 14 }}>
          Reference Network
        </Text>

        <Text
          style={{ color: Colors.darkBlue, fontWeight: 'bold', fontSize: 14 }}>
          Lihat Semua
        </Text>
      </View>

      <FlatList data={networkList} renderItem={renderItem} />
    </View>
  );
};

export default ReferenceNetworkComponent;
