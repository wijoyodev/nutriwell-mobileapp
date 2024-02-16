/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

type NetworkType = {
  level: number;
  totalNetwork: number;
  totalActive: number;
};

const network: NetworkType[] = [
  {
    level: 1,
    totalNetwork: 50,
    totalActive: 20,
  },
  {
    level: 2,
    totalNetwork: 60,
    totalActive: 30,
  },
  {
    level: 3,
    totalNetwork: 70,
    totalActive: 40,
  },
];

const ReferenceNetworkComponent = () => {
  const renderItem = (info: ListRenderItemInfo<NetworkType>) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.disabled,
          paddingBottom: 16,
          paddingTop: info.index > 0 ? 16 : 0,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14, fontWeight: 'bold' }}>
          Level {info.item.level}
        </Text>

        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 12 }}>TOTAL REF NETWORK</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Icon name={'user'} />
              <Text
                style={{ fontSize: 12, color: Colors.black, marginLeft: 6 }}>
                {info.item.totalNetwork} network
              </Text>
            </View>
          </View>

          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 12 }}>SUDAH BERTRANSAKSI</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 6,
              }}>
              <Icon name={'user'} />
              <Text
                style={{ fontSize: 12, color: Colors.black, marginLeft: 6 }}>
                {info.item.totalActive} network
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        borderRadius: 16,
        borderColor: Colors.disabled,
        borderWidth: 1,
        padding: 16,
        marginTop: 16,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
          Reference Network
        </Text>
        <Text style={{ fontSize: 14, color: Colors.blue, fontWeight: 'bold' }}>
          Lihat Semua
        </Text>
      </View>

      <FlatList data={network} renderItem={renderItem} />

      <Text style={{ fontStyle: 'italic', marginTop: 12 }}>
        *Sudah bertransaksi = dalam bulan ini
      </Text>
    </View>
  );
};

export default ReferenceNetworkComponent;
