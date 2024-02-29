/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';

const HeaderHomeComponent = () => {
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
            Willy Wonka
          </Text>
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: Colors.white,
          }}>
          18 Januari 2024
        </Text>
      </View>
    </View>
  );
};

export default HeaderHomeComponent;
