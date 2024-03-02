/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, ListRenderItemInfo, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

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
              <Icon name={'people-outline'} />
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
              <Icon name={'person-outline'} />
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
        margin: 16,
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
        <Text
          style={{ fontSize: 14, color: Colors.darkBlue, fontWeight: 'bold' }}>
          Lihat Semua
        </Text>
      </View>

      {network.length > 0 ? (
        <>
          <FlatList data={network} renderItem={renderItem} />

          <Text style={{ fontStyle: 'italic', marginTop: 12 }}>
            *Sudah bertransaksi = dalam bulan ini
          </Text>
        </>
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 24,
          }}>
          <Image
            source={require('../../../assets/images/empty-box.png')}
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

export default ReferenceNetworkComponent;
