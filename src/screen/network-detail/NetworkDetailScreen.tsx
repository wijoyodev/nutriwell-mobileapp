/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import ProfileNetworkComponent from './components/ProfileNetworkComponent';
import NetworkListComponent from './components/NetworkListComponent';
import dayjs from 'dayjs';
import Utils from 'service/Utils';

export type Network = {
  level: number;
  total: number;
};

const networkList: Network[] = [
  {
    level: 1,
    total: 100,
  },
  {
    level: 2,
    total: 200,
  },
  {
    level: 3,
    total: 200,
  },
  {
    level: 4,
    total: 200,
  },
];

export type NetworkDetail = {
  name: string;
  imageUrl: string;
  joinDate: Date;
  level: number;
  monthlyPurchase: number;
  networks: Network[];
};

const networkDetail: NetworkDetail = {
  name: 'Gill Lucy',
  imageUrl: '',
  joinDate: new Date(),
  level: 2,
  monthlyPurchase: 1500000,
  networks: networkList,
};

const NetworkDetailScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: Colors.white }}>
      <ProfileNetworkComponent network={networkDetail} />
      <View style={{ paddingHorizontal: 16, paddingBottom: 16 }}>
        <Text>INFORMASI</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 16,
          }}>
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            Tanggal Bergabung
          </Text>
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            {dayjs(networkDetail.joinDate).format('DD MMMM YYYY')}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text style={{ color: Colors.black, fontSize: 14 }}>Level</Text>
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            #{networkDetail.level}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            Total Belanja Bulan Ini
          </Text>
          <Text style={{ color: Colors.black, fontSize: 14 }}>
            {Utils.getPriceString(networkDetail.monthlyPurchase)}
          </Text>
        </View>
      </View>

      <NetworkListComponent networks={networkDetail.networks} />
    </ScrollView>
  );
};

export default NetworkDetailScreen;
