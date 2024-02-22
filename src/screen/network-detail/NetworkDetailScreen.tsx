/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import ProfileNetworkComponent from './components/ProfileNetworkComponent';
import NetworkListComponent from './components/NetworkListComponent';

const NetworkDetailScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: Colors.white }}>
      <ProfileNetworkComponent />
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
            24 Januari 2024
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text style={{ color: Colors.black, fontSize: 14 }}>Level</Text>
          <Text style={{ color: Colors.black, fontSize: 14 }}>#1</Text>
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
          <Text style={{ color: Colors.black, fontSize: 14 }}>Rp2.000.000</Text>
        </View>
      </View>

      <NetworkListComponent />
    </ScrollView>
  );
};

export default NetworkDetailScreen;
