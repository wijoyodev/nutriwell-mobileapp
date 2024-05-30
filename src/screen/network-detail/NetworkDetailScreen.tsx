/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import ProfileNetworkComponent from './components/ProfileNetworkComponent';
import NetworkListComponent from './components/NetworkListComponent';
import dayjs from 'dayjs';
import Utils from 'service/Utils';
import { NetworkTypeSummary } from 'screen/main-home/components/ReferenceNetworkComponent';
import useGetNetwork from './service/useGetNetwork';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';

export type NetworkDetail = {
  name: string;
  imageUrl: string;
  joinDate: Date;
  level: number;
  monthlyPurchase: number;
  networks: NetworkTypeSummary[];
};

const NetworkDetailScreen = () => {
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const { loading, network } = useGetNetwork(params?.id);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: Colors.white }}>
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {network !== undefined && <ProfileNetworkComponent network={network} />}
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
            {network?.joinDate !== undefined &&
              dayjs(network?.joinDate).format('DD MMMM YYYY')}
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
            #{params?.level}
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
            {Utils.getPriceString(network?.monthlyPurchase ?? 0)}
          </Text>
        </View>
      </View>

      <NetworkListComponent networks={network?.networks ?? []} />
    </ScrollView>
  );
};

export default NetworkDetailScreen;
