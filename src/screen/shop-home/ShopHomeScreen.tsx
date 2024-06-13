/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React, { useEffect, useRef, useState } from 'react';
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
import { CartItem } from 'screen/cart/CartScreen';
import updateCart from 'network/shop/update-cart';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

const ShopHomeScreen = () => {
  const { width, height } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const { loading, product, isError } = useGetProduct();
  const { loading: loadingCart, cartItems } = useGetCart();
  const mapCartItems = Utils.groupBy(
    cartItems ?? [],
    cartItem => cartItem.product_id,
  );

  const [quantity, setQuantity] = useState(0);

  const snackbarRef = useRef<CustomSnackbarHandle | null>();

  useEffect(() => {
    if ((cartItems ?? []).length > 0) {
      setQuantity(cartItems?.[0].quantity ?? 0);
    } else {
      setQuantity(0);
    }
  }, [cartItems]);

  useEffect(() => {
    if (isError) {
      snackbarRef?.current?.showSnackbarUnknownError();
    }
  }, [isError]);

  const handleAddToCart = () => {
    const cartItemList: CartItem[] = mapCartItems.get(product?.id) ?? [];
    let request = {
      product_id: product?.id ?? 0,
      quantity: 0,
    };

    console.log('cartItemList: ', cartItemList);

    if (cartItemList.length === 0) {
      request.quantity = 1;
      addToCart(request).then(response => {
        console.log('Request add to cart: ', request);
        console.log('Response add to cart: ', response);
        setQuantity(quantity + 1);
        snackbarRef?.current?.showSnackbarSuccess('Success add to cart');
      });
    } else {
      const cartItem: CartItem = cartItemList?.[0];
      updateCart(cartItem.id, {
        quantity: cartItem.quantity + 1,
        weight: cartItem.weight,
        price: cartItem.price,
      }).then(response => {
        console.log('Response update cart: ', response);
        setQuantity(quantity + 1);
        snackbarRef?.current?.showSnackbarSuccess('Success add to cart');
      });
    }
  };

  const handleBuyNow = () => {
    const cartItemList: CartItem[] = mapCartItems.get(product?.id) ?? [];
    if (cartItemList.length === 0) {
      let request = {
        product_id: product?.id ?? 0,
        quantity: 1,
      };
      addToCart(request).then(response => {
        console.log('Request add to cart: ', request);
        console.log('Response add to cart: ', response);
        setQuantity(quantity + 1);
        navigate(CART_SCREEN);
      });
    } else {
      navigate(CART_SCREEN);
    }
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          paddingBottom: 16,
          backgroundColor: Colors.white,
        }}>
        <ShopHeaderComponent quantity={quantity} />
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
                style={{
                  color: Colors.blue,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
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
            style={{
              color: Colors.black,
              fontSize: 14,
              paddingHorizontal: 16,
            }}>
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
            containerStyle={{
              flex: 1,
              borderColor: Colors.blue,
              borderWidth: 1,
            }}
            textStyle={{
              color: Colors.blue,
            }}
            text={'ADD TO CART'}
          />
          <CustomButton
            onPress={handleBuyNow}
            backgroundColor={Colors.blue}
            containerStyle={{ flex: 1, marginLeft: 12 }}
            text={'BELI SEKARANG'}
          />
        </View>
      </View>
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </>
  );
};

export default ShopHomeScreen;
