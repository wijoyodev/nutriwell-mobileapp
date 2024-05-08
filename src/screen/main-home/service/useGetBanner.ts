import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getBanner from 'network/shop/banner';
import { CarouselItem } from '../components/CarouselComponent';

const useGetBanner = () => {
  const [banners, setBanners] = useState<CarouselItem[]>();
  const [loading, setLoading] = useState<boolean>();

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getBanner().then(response => {
        setLoading(false);
        setBanners(
          response.result.map(item => ({
            imageUrl: item.image_url,
          })),
        );
      });
    }, []),
  );

  return { loading, banners };
};

export default useGetBanner;
