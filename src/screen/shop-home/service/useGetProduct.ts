import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Product } from '../ShopHomeScreen';
import getProduct from 'network/shop/product';

const useGetProduct = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getProduct().then(response => {
        setLoading(false);
        setProduct(response.data);
      });
    }, []),
  );

  return { loading, product };
};

export default useGetProduct;
