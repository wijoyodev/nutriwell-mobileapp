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
        setCartItems(response.data);
      });
    }, []),
  );

  return { loading, cartItems };
};

export default useGetCart;
