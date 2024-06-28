import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { CartItem } from '../CartScreen';
import getCart, { CartItemResponse } from 'network/shop/cart';

const useGetCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>();
  const [ppnTax, setPpnTax] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const refetch = useCallback(() => {
    setLoading(true);
    getCart().then(response => {
      console.log('Response cart: ', response.result);
      setLoading(false);
      setCartItems(convertToCartItem(response.result?.data ?? []));
      setPpnTax(response.result.ppn_tax);
    });
  }, []);

  useFocusEffect(refetch);

  return { loading, cartItems, ppnTax, refetch };
};

const convertToCartItem: (response: CartItemResponse[]) => CartItem[] = (
  response: CartItemResponse[],
) => {
  return response.map(cartItem => ({
    id: cartItem.id,
    product_id: cartItem.product_id,
    name: cartItem.product_name,
    price: cartItem.price,
    priceAfterTax: cartItem.price_after_tax,
    weight: cartItem.product_weight,
    quantity: cartItem.quantity,
    totalPrice: cartItem.total_price,
    totalWeight: cartItem.total_weight,
    imageUrl: cartItem.product_images?.[0] ?? '',
  }));
};

export default useGetCart;
