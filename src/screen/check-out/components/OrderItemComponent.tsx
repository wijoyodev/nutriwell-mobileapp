/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';

const OrderItemComponent = () => {
  return (
    <View
      style={{
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 16,
        padding: 12,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../assets/images/product_image.png')}
        style={{ height: 70, width: 70, borderRadius: 8 }}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          GARAM Kurang Natrium 200 gram
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 4,
          }}>
          <Text style={{ fontSize: 14 }}>Rp1.560.000 x 2</Text>
          <Text
            style={{
              fontSize: 14,
              color: Colors.darkBlue,
              fontWeight: 'bold',
            }}>
            Rp3.120.000
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderItemComponent;
