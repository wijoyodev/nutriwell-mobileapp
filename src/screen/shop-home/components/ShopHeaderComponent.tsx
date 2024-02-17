/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from 'themes/Colors';

const ShopHeaderComponent = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
        backgroundColor: Colors.blue,
        alignItems: 'center',
      }}>
      <View style={{ flex: 3 }} />
      <View
        style={{
          // width,
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 16, color: Colors.white }}>Belanja</Text>
      </View>

      <View
        style={{ flexDirection: 'row', flex: 3, justifyContent: 'flex-end' }}>
        <View
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 12,
            marginRight: 6,
          }}>
          <Icon name={'clock-o'} color={Colors.darkBlue} />
        </View>

        <View
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 12,
          }}>
          <Icon name={'shopping-cart'} color={Colors.darkBlue} />
        </View>
      </View>
    </View>
  );
};

export default ShopHeaderComponent;
