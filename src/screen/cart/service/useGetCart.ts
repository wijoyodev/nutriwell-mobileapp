import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { CartItem } from '../CartScreen';
import getCart, { CartItemResponse } from 'network/shop/cart';

const useGetCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getCart().then(response => {
        setLoading(false);
        setCartItems(convertToCartItem(response.result));
      });
    }, []),
  );

  const refetch = () => {
    getCart().then(response => {
      setLoading(false);
      setCartItems(convertToCartItem(response.result));
    });
  };

  return { loading, cartItems, refetch };
};

const convertToCartItem: (response: CartItemResponse[]) => CartItem[] = (
  response: CartItemResponse[],
) => {
  return response.map(cartItem => ({
    id: cartItem.id,
    product_id: cartItem.product_id,
    name: cartItem.product_name,
    price: cartItem.price,
    quantity: cartItem.quantity,
    totalPrice: cartItem.total_price,
    totalWeight: cartItem.total_weight,
    imageUrl: cartItem.product_images?.[0] ?? '',
  }));
}

export default useGetCart;
