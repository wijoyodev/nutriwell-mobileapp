/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { NetworkDetail } from '../NetworkDetailScreen';
import CustomProfileImage from 'components/CustomProfileImage';

export type ProfileNetworkComponentProps = {
  network: NetworkDetail;
};

const ProfileNetworkComponent: React.FC<ProfileNetworkComponentProps> = ({
  network,
}) => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: Colors.grey,
        borderRadius: 16,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 16,
      }}>
      <CustomProfileImage size={60} imageUrl={network.imageUrl} />
      <Text
        style={{
          color: Colors.black,
          fontSize: 16,
          fontWeight: 'bold',
          marginTop: 8,
        }}>
        {network?.name ?? ''}
      </Text>
    </View>
  );
};

export default ProfileNetworkComponent;
