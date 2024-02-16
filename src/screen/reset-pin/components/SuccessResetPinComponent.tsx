/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { LOGIN_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const SuccessResetPinComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: Colors.black,
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          Berhasil mengubah PIN
        </Text>
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            textAlign: 'center',
            marginTop: 8,
          }}>
          Silakan masuk kembali ke akun Anda menggunakan PIN yang baru.
        </Text>
      </View>

      <CustomButton
        onPress={() => navigate(LOGIN_SCREEN)}
        backgroundColor={Colors.blue}
        text={'MASUK KEMBALI'}
      />
    </View>
  );
};

export default SuccessResetPinComponent;
