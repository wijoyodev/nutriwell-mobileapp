/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const FooterCheckOutComponent = () => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderTopColor: Colors.grey,
        borderTopWidth: 4,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Total</Text>
        <Text
          style={{ fontSize: 14, color: Colors.darkBlue, fontWeight: 'bold' }}>
          Rp3.200.000
        </Text>
      </View>

      <CustomButton backgroundColor={Colors.blue} text={'BUAT PESANAN'} />
    </View>
  );
};

export default FooterCheckOutComponent;
