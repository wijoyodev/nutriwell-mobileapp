/* eslint-disable react-native/no-inline-styles */
import { ProfileResponse } from 'network/auth/profile';
import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import useGetProfile from '../service/useGetProfile';
import dayjs from 'dayjs';

export type HeaderHomeComponentProps = {};

const HeaderHomeComponent: React.FC<HeaderHomeComponentProps> = () => {
  const { loading, profile } = useGetProfile();

  if (loading) {
    return (
      <View style={{ backgroundColor: Colors.blue }}>
        <ActivityIndicator color={Colors.white} size={'large'} />
      </View>
    );
  }
  return (
    <View
      style={{
        backgroundColor: Colors.blue,
        flexDirection: 'row',
        gap: 12,
        padding: 16,
      }}>
      <Image
        source={require('../../../assets/images/product_image.png')}
        style={{ height: 44, width: 44, borderRadius: 22 }}
      />
      <View>
        <Text
          style={{
            fontSize: 16,
            color: Colors.white,
          }}>
          Halo,{' '}
          <Text
            style={{
              fontWeight: 'bold',
            }}>
            {profile?.name}
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: Colors.white,
          }}>
          {dayjs(profile?.birthDate).format('DD MMMM YYYY')}
        </Text>
      </View>
    </View>
  );
};

export default HeaderHomeComponent;
