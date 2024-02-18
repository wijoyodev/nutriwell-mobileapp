/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { Image, ScrollView, Text, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';
import ShopHeaderComponent from './components/ShopHeaderComponent';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { CART_SCREEN } from 'navigation/constants';

const ShopHomeScreen = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <ScrollView
      style={{
        flex: 1,
        paddingBottom: 16,
      }}>
      <ShopHeaderComponent />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 16,
        }}>
        <Image
          source={require('../../assets/images/product_image.png')}
          style={{
            width: width - 32,
            height: height / 2.25,
            borderRadius: 16,
          }}
        />
      </View>

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
          onPress={() => navigate(CART_SCREEN)}
          backgroundColor={Colors.blue}
          containerStyle={{ flex: 1, marginLeft: 12 }}
          text={'BELI SEKARANG'}
        />
      </View>
    </ScrollView>
  );
};

export default ShopHomeScreen;
