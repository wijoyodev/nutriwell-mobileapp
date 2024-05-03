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
import addToCart from 'network/shop/add-to-cart';
import useGetCart from 'screen/cart/service/useGetCart';

const ShopHomeScreen = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const { loading, product } = useGetProduct();
  const { loading: loadingCart, cartItems } = useGetCart();
  const mapCartItems = Utils.groupBy(
    cartItems ?? [],
    cartItem => cartItem.product_id,
  );

  const handleAddToCart = () => {
    const request = {
      product_id: product?.id ?? 0,
      quantity: mapCartItems.get(product?.id)?.[0].quantity + 1,
    };

    console.log('Request post cart: ', request);
    addToCart(request).then(response => {
      console.log('Response add to cart: ', response);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        paddingBottom: 16,
        backgroundColor: Colors.white,
      }}>
      <ShopHeaderComponent
        quantity={mapCartItems.get(product?.id)?.[0]?.quantity ?? 0}
      />
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
              source={{
                uri: product.imageUrl,
              }}
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
          onPress={handleAddToCart}
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
