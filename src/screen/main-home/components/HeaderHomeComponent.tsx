/* eslint-disable react-native/no-inline-styles */
import { ProfileResponse } from 'network/auth/profile';
import React from 'react';
import { ActivityIndicator, Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import useGetProfile from '../service/useGetProfile';
import dayjs from 'dayjs';
import CustomProfileImage from 'components/CustomProfileImage';

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

  if (!profile) {
    return <></>;
  }

  return (
    <View
      style={{
        backgroundColor: Colors.blue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
      }}>
      <View style={{ flexDirection: 'row', gap: 12 }}>
        <CustomProfileImage size={44} imageUrl={profile?.imageUrl} />
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
      <View
        style={{
          backgroundColor: profile.active ? Colors.green : Colors.lightRed,
          paddingHorizontal: 20,
          paddingVertical: 4,
          borderRadius: 12,
        }}>
        <Text style={{ color: Colors.white, fontSize: 14 }}>
          {profile.active ? 'Aktif' : 'Tidak Aktif'}
        </Text>
      </View>
    </View>
  );
};

export default HeaderHomeComponent;
