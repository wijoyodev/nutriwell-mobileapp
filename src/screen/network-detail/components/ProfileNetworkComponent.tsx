/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';

const ProfileNetworkComponent = () => {
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
      <Image
        source={require('../../../assets/images/product_image.png')}
        style={{
          height: 60,
          width: 60,
          borderRadius: 30,
          marginBottom: 8,
        }}
      />
      <Text style={{ color: Colors.black, fontSize: 16, fontWeight: 'bold' }}>
        Gill Lucy
      </Text>
    </View>
  );
};

export default ProfileNetworkComponent;
