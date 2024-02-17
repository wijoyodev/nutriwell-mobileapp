/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';
import ShopHeaderComponent from './components/ShopHeaderComponent';

const ShopHomeScreen = () => {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 16,
      }}>
      <ShopHeaderComponent />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={{ color: Colors.black, fontSize: 16 }}>
          GARAM Kurang Natrium 200 gram
        </Text>
        <Text style={{ color: Colors.blue, fontWeight: 'bold', fontSize: 16 }}>
          Rp150.000
        </Text>
      </View>

      <View
        style={{
          backgroundColor: Colors.grey,
          height: 8,
          width: width,
          marginVertical: 16,
        }}
      />

      <Text
        style={{ color: Colors.black, fontSize: 14, paddingHorizontal: 16 }}>
        Lorem ipsum dolor sit amet consectetur. Egestas posuere at parturient
        facilisi in sit nulla. Pretium est mauris elit dolor eget integer. Lorem
        ipsum dolor sit amet consectetur. Egestas posuere at parturient facilisi
        in sit nulla. Pretium est mauris elit dolor eget integer.
      </Text>

      <View
        style={{ paddingHorizontal: 16, flexDirection: 'row', marginTop: 16 }}>
        <CustomButton
          containerStyle={{ flex: 1, borderColor: Colors.blue, borderWidth: 1 }}
          textStyle={{
            color: Colors.blue,
          }}
          text={'ADD TO CART'}
        />
        <CustomButton
          backgroundColor={Colors.blue}
          containerStyle={{ flex: 1, marginLeft: 12 }}
          text={'BELI SEKARANG'}
        />
      </View>
    </View>
  );
};

export default ShopHomeScreen;
