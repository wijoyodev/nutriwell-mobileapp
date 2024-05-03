import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { CartItem } from '../CartScreen';
import getCart from 'network/shop/cart';

const useGetCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>();
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getCart().then(response => {
        setLoading(false);
        const cartItemsValue: CartItem[] = response.result.map(cartItem => ({
          id: cartItem.id,
          name: cartItem.product_name,
          price: cartItem.price,
          quantity: cartItem.quantity,
          totalPrice: cartItem.total_price,
          imageUrl: cartItem.product_images?.[0] ?? '',
        }));
        setCartItems(cartItemsValue);
      });
    }, []),
  );

  return { loading, cartItems };
};

export default useGetCart;
