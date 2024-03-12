/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import dayjs from 'dayjs';
import { ProfileResponse } from 'network/auth/profile';
import CustomProfileImage from 'components/CustomProfileImage';

export type ProfileInfoComponentProps = {
  profile: ProfileResponse;
};

const ProfileInfoComponent: React.FC<ProfileInfoComponentProps> = ({
  profile,
}) => {
  const getGender = () => {
    switch (profile.gender) {
      case 'male':
        return 'Laki-laki';
      case 'female':
        return 'Perempuan';
      default:
        return '-';
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', gap: 16, alignItems: 'center' }}>
        <CustomProfileImage size={80} imageUrl={profile.imageUrl} />
        <View style={{ flexDirection: 'column', gap: 8 }}>
          <Text
            style={{ fontSize: 16, color: Colors.black, fontWeight: 'bold' }}>
            {profile.name}
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Icon name={'mail-outline'} color={Colors.black} />
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {profile.email}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4 }}>NOMOR TELEPON</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {profile.phoneNumber}
        </Text>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4 }}>TANGGAL LAHIR</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {dayjs(profile.birthDate).locale('id').format('DD MMMM YYYY')}
        </Text>
      </View>

      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 12, marginBottom: 4 }}>JENIS KELAMIN</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>{getGender()}</Text>
      </View>
    </View>
  );
};

export default ProfileInfoComponent;
