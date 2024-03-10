/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Colors from 'themes/Colors';
import ShopHeaderComponent from './components/ShopHeaderComponent';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { CART_SCREEN } from 'navigation/constants';
import Utils from 'service/Utils';
import useGetProduct from './service/useGetProduct';

export type Product = {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
};

const ShopHomeScreen = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const { loading, product } = useGetProduct();

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 16,
        backgroundColor: Colors.white,
      }}>
      <ShopHeaderComponent />
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        {loading && (
          <View style={{ backgroundColor: Colors.blue }}>
            <ActivityIndicator color={Colors.white} size={'large'} />
          </View>
        )}
        {product !== undefined && (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 16,
              paddingTop: 16,
              position: 'relative',
            }}>
            <View
              style={{
                position: 'absolute',
                backgroundColor: Colors.blue,
                height: height / 4.5,
                width: width,
                top: 0,
                borderBottomStartRadius: 16,
                borderBottomEndRadius: 16,
              }}
            />

            <Image
              source={require('../../assets/images/product_image.png')}
              style={{
                width: width - 32,
                height: height / 2.25,
                borderRadius: 16,
              }}
            />
          </View>
        )}

        <View style={{ paddingHorizontal: 16 }}>
          <Text style={{ color: Colors.black, fontSize: 16 }}>
            {product?.name}
          </Text>
          {product !== undefined && (
            <Text
              style={{ color: Colors.blue, fontWeight: 'bold', fontSize: 16 }}>
              {Utils.getPriceString(product?.price ?? 0)}
            </Text>
          )}
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
          {product?.description}
        </Text>
      </ScrollView>

      <View
        style={{
          paddingHorizontal: 16,
          flexDirection: 'row',
          marginTop: 16,
          zIndex: 5,
        }}>
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
    </View>
  );
};

export default ShopHomeScreen;
