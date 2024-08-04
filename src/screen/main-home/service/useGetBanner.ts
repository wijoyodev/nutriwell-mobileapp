import { useCallback, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import getBanner from 'network/shop/banner';
import { CarouselItem } from '../components/CarouselComponent';

const useGetBanner = () => {
  const [banners, setBanners] = useState<CarouselItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      getBanner().then(response => {
        setLoading(false);
        console.log('Response banner: ', response);
        setBanners(
          response?.result?.map(
            item =>
              ({
                imageUrl: item.image_url,
                title: item.title,
                description: item.description,
              } ?? []),
          ),
        );
      });
    }, []),
  );

  return { loading, banners };
};

export default useGetBanner;
