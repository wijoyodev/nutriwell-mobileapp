/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import CustomTextInput from 'components/CustomTextInput';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';

const BankAccountScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 14, color: Colors.black, marginTop: 16 }}>
          Akun bank akan digunakan untuk mencairkan reward Anda.{' '}
        </Text>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Bank
          </Text>
          <CustomTextInput />
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nama Pemilik Rekening
          </Text>
          <CustomTextInput />
        </View>

        <View style={{ marginVertical: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nomor Rekening
          </Text>
          <CustomTextInput />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <CustomButton
          onPress={goBack}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
    </View>
  );
};

export default BankAccountScreen;
