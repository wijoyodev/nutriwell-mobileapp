/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const HeaderHomeComponent = () => {
  return (
    <View
      style={{
        marginVertical: 16,
      }}>
      <Text
        style={{
          fontSize: 16,
          color: Colors.black,
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
          color: Colors.black,
        }}>
        18 Januari 2024
      </Text>
    </View>
  );
};

export default HeaderHomeComponent;
