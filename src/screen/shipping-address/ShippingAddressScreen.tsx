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

const ShippingAddressScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
      }}>
      <ScrollView
        style={{ flex: 1, padding: 16 }}
        showsVerticalScrollIndicator={false}>
        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nama Penerima
          </Text>
          <CustomTextInput placeholder={'Masukkan nama penerima'} />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nomor Telepon Penerima
          </Text>
          <CustomTextInput placeholder={'Masukkan nama penerima'} />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Provinsi
          </Text>
          <CustomTextInput placeholder={'Pilih provinsi'} />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Kota
          </Text>
          <CustomTextInput placeholder={'Pilih kota'} />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Kecamatan
          </Text>
          <CustomTextInput placeholder={'Pilih kecamatan'} />
        </View>

        <View style={{ marginBottom: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Kode Pos
          </Text>
          <CustomTextInput placeholder={'Masukkan kode pos'} />
        </View>

        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Alamat Lengkap
          </Text>
          <CustomTextInput placeholder={'Masukkan alamat lengkap'} />
        </View>
      </ScrollView>

      <View style={{ backgroundColor: Colors.white, padding: 16 }}>
        <CustomButton
          onPress={() => goBack()}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
    </View>
  );
};

export default ShippingAddressScreen;
