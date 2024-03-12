/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import React from 'react';
import { ActivityIndicator, Image, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import useGetUpline from './service/useGetUpline';
import CustomProfileImage from 'components/CustomProfileImage';

const UplineInformationScreen = () => {
  const { upline, loading } = useGetUpline();
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, padding: 16 }}>
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {upline !== undefined && (
        <>
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
            <CustomProfileImage size={60} imageUrl={upline.imageUrl} />
            <Text
              style={{
                fontSize: 16,
                color: Colors.black,
                fontWeight: 'bold',
                marginTop: 8,
              }}>
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
            <Text style={{ fontSize: 14, color: Colors.black }}>
              Nomor Telepon
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              081283839292
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default UplineInformationScreen;
