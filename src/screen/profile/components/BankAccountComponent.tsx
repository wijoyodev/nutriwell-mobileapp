/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const BankAccountComponent = () => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text>AKUN BANK</Text>

      <View
        style={{
          marginTop: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: Colors.grey,
          borderRadius: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
            Belum ada akun bank
          </Text>
          <Text style={{ fontSize: 14, color: Colors.black, marginTop: 6 }}>
            Tambah akun bank untuk dapat menarik komisi Anda
          </Text>
        </View>
        <Icon name={'angle-right'} color={Colors.black} size={20} />
      </View>
    </View>
  );
};

export default BankAccountComponent;
