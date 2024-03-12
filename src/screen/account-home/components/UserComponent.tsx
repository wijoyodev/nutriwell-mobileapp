/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { ProfileResponse } from 'network/auth/profile';
import CustomProfileImage from 'components/CustomProfileImage';

export type UserComponentProps = {
  profile: ProfileResponse;
};

const UserComponent: React.FC<UserComponentProps> = ({ profile }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 12,
          paddingTop: 16,
          position: 'relative',
        }}>
        <View
          style={{
            height: 56,
            width: width,
            borderBottomLeftRadius: 16,
            borderBottomRightRadius: 16,
            backgroundColor: Colors.blue,
            position: 'absolute',
            top: 0,
          }}
        />
        <CustomProfileImage size={80} imageUrl={profile.imageUrl} />
      </View>

      <Text
        style={{
          color: Colors.black,
          fontWeight: 'bold',
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 8,
        }}>
        {profile.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
        }}>
        <Icon name={'mail-outline'} color={Colors.black} />
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {profile.email}
        </Text>
      </View>
    </View>
  );
};

export default UserComponent;
