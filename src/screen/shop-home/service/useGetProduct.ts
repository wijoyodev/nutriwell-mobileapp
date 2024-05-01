import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getProduct from 'network/shop/product';

type Product = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
};

const useGetProduct = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getProduct().then(response => {
        setLoading(false);
        const productValue: Product = {
          id: response.result[0].id,
          name: response.result[0].product_name,
          imageUrl: response.result[0].product_images?.[0] ?? '',
          price: response.result[0].price,
          description: response.result[0].description,
        };

        setProduct(productValue);
      });
    }, []),
  );

  return { loading, product };
};

export default useGetProduct;
