import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getProduct from 'network/shop/product';

export type Product = {
  id: number;
  name: string;
  imageUrls: string[];
  price: number;
  priceAfterTax: number;
  description: string;
};

const useGetProduct = () => {
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setIsError(false);
      setLoading(true);
      getProduct()
        .then(response => {
          setLoading(false);

          console.log('Response product: ', response.result);
          const productValue: Product = {
            id: response.result.data[0].id,
            name: response.result.data[0].product_name,
            imageUrls: response.result.data[0].product_images ?? [],
            price: response.result.data[0].price,
            priceAfterTax: response.result.data[0].price_after_tax,
            description: response.result.data[0].description,
          };
          setProduct(productValue);
        })
        .catch(err => {
          console.log('Error get product: ', err);
          setLoading(false);
          setIsError(true);
        });
    }, []),
  );

  return { loading, product, isError };
};

export default useGetProduct;
