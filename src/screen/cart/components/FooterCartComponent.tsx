/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const FooterCartComponent = () => {
  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: Colors.grey,
        borderTopWidth: 1,
      }}>
      <View>
        <Text style={{ fontSize: 12 }}>TOTAL BELANJA</Text>
        <Text style={{ color: Colors.black, fontSize: 16, fontWeight: 'bold' }}>
          Rp1.500.000
        </Text>
      </View>
      <CustomButton
        containerStyle={{ paddingHorizontal: 16 }}
        backgroundColor={Colors.blue}
        text={'CHECK OUT'}
      />
    </View>
  );
};

export default FooterCartComponent;
