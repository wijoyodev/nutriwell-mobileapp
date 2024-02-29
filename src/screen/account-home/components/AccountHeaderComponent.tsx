/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const AccountHeaderComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: Colors.blue,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 16, color: Colors.white }}>Akun Saya</Text>
      </View>
    </View>
  );
};

export default AccountHeaderComponent;
