/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { SHIPPING_ADDRESS_SCREEN } from 'navigation/constants';
import { Address } from '../CheckOutScreen';
import { ShippingAddressForm } from 'screen/shipping-address/ShippingAddressScreen';
import getProvince from 'network/address-list/province';
import getCity from 'network/address-list/city';

export type ShippingAddressComponentProps = {
  address: Address;
  error?: string;
};
const ShippingAddressComponent: React.FC<ShippingAddressComponentProps> = ({
  address,
  error,
}) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const handleNavigate = async () => {
    let provinceValue = address?.province ?? '';
    if (provinceValue) {
      const response = await getProvince();
      const province = response.result.filter(
        item => item.province === provinceValue,
      )[0];
      provinceValue = `${province.id}#${province.province}`;
    }

    let cityValue = address?.city ?? '';
    if (cityValue) {
      const response = await getCity(parseInt(provinceValue.split('#')[0], 10));
      const province = response.result.filter(
        item => item.city === cityValue,
      )[0];
      cityValue = `${province.id}#${province.city}`;
    }

    const addressValue: ShippingAddressForm = {
      id: address?.id.toString() ?? '',
      name: address?.name ?? '',
      phoneNumber: address?.phoneNumber ?? '',
      code: address?.code ?? '+62',
      province: provinceValue,
      city: cityValue,
      district: address?.district ?? '',
      streetAddress: address?.streetAddress ?? '',
      postalCode: address?.postalCode ?? '',
    };

    navigate(SHIPPING_ADDRESS_SCREEN, {
      data: addressValue,
    });
  };
  return (
    <>
      <TouchableOpacity
        onPress={handleNavigate}
        style={{
          borderColor: Colors.grey,
          borderRadius: 12,
          borderWidth: 1,
          paddingHorizontal: 12,
          paddingVertical: address ? 8 : 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        {address ? (
          <View>
            <Text
              style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
              {address.name}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {address.phoneNumber.charAt(0) === '0'
                ? address.phoneNumber
                : `0${address.phoneNumber}`}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {address.streetAddress}, {address.district}, {address.city},{' '}
              {address.province}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {address.postalCode}
            </Text>
          </View>
        ) : (
          <Text style={{ color: Colors.lightGrey, fontSize: 14 }}>
            {'Masukkan Alamat Pengiriman'}
          </Text>
        )}
        <Icon name={'angle-right'} color={Colors.black} size={18} />
      </TouchableOpacity>
      {error && (
        <Text
          style={{
            color: Colors.red,
            marginBottom: 4,
            marginTop: 4,
            fontSize: 12,
          }}>
          {error}
        </Text>
      )}
    </>
  );
};

export default ShippingAddressComponent;
