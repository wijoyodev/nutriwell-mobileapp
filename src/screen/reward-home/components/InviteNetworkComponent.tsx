/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const InviteNetworkComponent = () => {
  return (
    <View
      style={{
        marginHorizontal: 16,
        marginTop: 16,
        backgroundColor: Colors.darkBlue,
        padding: 16,
        borderRadius: 16,
      }}>
      <Text style={{ fontSize: 16, color: Colors.white, fontWeight: 'bold' }}>
        Undang Reference Network
      </Text>

      <Text style={{ fontSize: 14, color: Colors.white, marginTop: 6 }}>
        Daftarkan reference network lainnya dengan menggunakan kode di bawah
        ini:
      </Text>

      <View
        style={{
          backgroundColor: Colors.white,
          borderRadius: 12,
          paddingVertical: 8,
          paddingHorizontal: 16,
          marginTop: 16,
          marginBottom: 12,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{ color: Colors.black, fontSize: 18, fontWeight: 'bold' }}>
          YBSH21
        </Text>

        <Text style={{ color: Colors.blue, fontSize: 16, fontWeight: 'bold' }}>
          SALIN
        </Text>
      </View>

      <CustomButton backgroundColor={Colors.blue} text={'BAGIKAN'} />
    </View>
  );
};

export default InviteNetworkComponent;
