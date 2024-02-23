/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { HOME_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const SuccessWithdrawComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <>
      <View
        style={{
          flex: 1,
          padding: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
          Berhasil menarik reward Anda
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
            textAlign: 'center',
            marginTop: 8,
          }}>
          Terima kasih sudah menarik reward Anda. Reward yang Anda cairkan dapat
          Anda lihat di Histori Penarikan
        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <CustomButton
          onPress={() => navigate(HOME_SCREEN)}
          backgroundColor={Colors.blue}
          text={'TUTUP'}
        />
      </View>
    </>
  );
};

export default SuccessWithdrawComponent;
