/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Image, Text, View } from 'react-native';
import Colors from 'themes/Colors';

const OrderHistoryComponent = () => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text>PESANAN ANDA</Text>

      <View
        style={{
          borderColor: Colors.grey,
          borderWidth: 1,
          borderRadius: 16,
          padding: 12,
          marginTop: 12,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Image
            source={require('../../../assets/images/product_image.png')}
            style={{
              height: 70,
              width: 70,
              borderRadius: 8,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ color: Colors.black, fontSize: 14 }}>
              GARAM Kurang Natrium 200 gram
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 6,
              }}>
              <Text style={{ fontSize: 14 }}>Rp1.500.000 x 2</Text>
              <Text
                style={{
                  color: Colors.darkBlue,
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                Rp3.000.000
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          Subtotal (2 produk)
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Rp3.000.000</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Ongkir</Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Rp10.000</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderTopWidth: 1,
          borderTopColor: Colors.grey,
          marginTop: 16,
          paddingTop: 16,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>Total</Text>
        <Text
          style={{ color: Colors.darkBlue, fontSize: 14, fontWeight: 'bold' }}>
          Rp3.010.000
        </Text>
      </View>
    </View>
  );
};

export default OrderHistoryComponent;
