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
import Icon from 'react-native-vector-icons/FontAwesome5';

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
        <View
          style={{
            backgroundColor: Colors.blue,
            padding: 20,
            borderRadius: 70,
            marginBottom: 24,
          }}>
          <View
            style={{
              backgroundColor: Colors.white,
              padding: 12,
              borderRadius: 50,
            }}>
            <Icon name={'check'} size={24} color={Colors.darkBlue} />
          </View>
        </View>
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
