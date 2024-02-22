/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import CustomTextInput from 'components/CustomTextInput';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const WithdrawScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View style={{ flex: 1 }}>
        <View style={{ padding: 16 }}>
          <Text style={{ marginBottom: 6, color: Colors.black }}>
            Jumlah Reward
          </Text>
          <CustomTextInput />
          <Text style={{ marginTop: 8 }}>
            Reward yang bisa dicairkan{' '}
            <Text style={{ fontWeight: 'bold' }}>Rp1.500.000</Text>
          </Text>
        </View>

        <View
          style={{
            padding: 16,
            borderTopColor: Colors.grey,
            borderTopWidth: 4,
          }}>
          <Text>AKUN BANK</Text>

          <View
            style={{
              marginTop: 16,
              padding: 16,
              borderColor: Colors.grey,
              borderWidth: 1,
              borderRadius: 16,
            }}>
            <Text
              style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
              John Doe
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                marginTop: 6,
              }}>
              BCA
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
              }}>
              60493499929
            </Text>
          </View>

          <Text style={{ marginTop: 12 }}>
            Anda dapat mengubah rekening tujuan Anda di menu Profil Saya yang
            terdapat di menu Akun Saya
          </Text>
        </View>
      </View>

      <View style={{ padding: 16 }}>
        <CustomButton backgroundColor={Colors.blue} text={'TARIK SEKARANG'} />
      </View>
    </View>
  );
};

export default WithdrawScreen;
