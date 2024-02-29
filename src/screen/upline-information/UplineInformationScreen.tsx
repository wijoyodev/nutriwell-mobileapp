/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import { Image, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';

const UplineInformationScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, padding: 16 }}>
      <View
        style={{
          padding: 16,
          marginBottom: 16,
          borderColor: Colors.grey,
          borderWidth: 1,
          borderRadius: 16,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/product_image.png')}
          style={{
            height: 60,
            width: 60,
            borderRadius: 30,
            marginBottom: 8,
          }}
        />
        <Text style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
          Monika Setiadi
        </Text>
      </View>

      <Text>INFORMASI</Text>
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          Tanggal Bergabung
        </Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {dayjs(new Date()).format('DD MMMM YYYY')}
        </Text>
      </View>

      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Nomor Telepon</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>081283839292</Text>
      </View>
    </View>
  );
};

export default UplineInformationScreen;
