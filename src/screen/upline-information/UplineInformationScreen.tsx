/* eslint-disable react-native/no-inline-styles */
import { useFocusEffect } from '@react-navigation/native';
import dayjs from 'dayjs';
import React, { useEffect, useRef } from 'react';
import { ActivityIndicator, StatusBar, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import useGetUpline from './service/useGetUpline';
import CustomProfileImage from 'components/CustomProfileImage';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

const UplineInformationScreen = () => {
  const { upline, loading, isError } = useGetUpline();

  const snackbarRef = useRef<CustomSnackbarHandle | null>();

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  useEffect(() => {
    if (isError) {
      snackbarRef?.current?.showSnackbarUnknownError();
    }
  }, [isError]);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white, padding: 16 }}>
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {upline?.name ? (
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
              {upline.name}
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
              {dayjs(upline.joinDate).format('DD MMMM YYYY')}
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
              {upline.phoneNumber}
            </Text>
          </View>
        </>
      ) : (
        <View>
          <Text style={{ textAlign: 'center', color: Colors.black }}>
            Tidak memiliki upline
          </Text>
        </View>
      )}
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </View>
  );
};

export default UplineInformationScreen;
