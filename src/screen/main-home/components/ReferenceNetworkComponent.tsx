/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, Image, ListRenderItemInfo, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import useGetNetwork from '../service/useGetNetwork';

export type NetworkTypeSummary = {
  level: number;
  totalNetwork: number;
  totalActive: number;
};

const ReferenceNetworkComponent = () => {
  const { network } = useGetNetwork();

  const renderItem = (info: ListRenderItemInfo<NetworkTypeSummary>) => {
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

      {(network?.networks?.length ?? 0) > 0 ? (
        <>
          <FlatList data={network?.networks} renderItem={renderItem} />

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
