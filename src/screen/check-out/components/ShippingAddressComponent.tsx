/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { SHIPPING_ADDRESS_SCREEN } from 'navigation/constants';

const ShippingAddressComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <TouchableOpacity
      onPress={() => navigate(SHIPPING_ADDRESS_SCREEN)}
      style={{
        borderColor: Colors.grey,
        borderRadius: 12,
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{ color: Colors.lightGrey, fontSize: 14 }}>
        {'Masukkan Alamat Pengiriman'}
      </Text>
      <Icon name={'angle-right'} color={Colors.black} size={18} />
    </TouchableOpacity>
  );
};

export default ShippingAddressComponent;
