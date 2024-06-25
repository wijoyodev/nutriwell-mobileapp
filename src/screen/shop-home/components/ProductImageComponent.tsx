/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, View, useWindowDimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Colors from 'themes/Colors';
import { Product } from '../service/useGetProduct';

export type ProductImageComponentProps = {
  product: Product;
  carousel?: boolean;
};

type CarouselRenderType = {
  item: string;
  index: number;
};

const ProductImageComponent: React.FC<ProductImageComponentProps> = ({
  product,
  carousel,
}) => {
  const { width, height } = useWindowDimensions();
  const isCarousel = React.useRef(null);

  const SLIDER_WIDTH = width * 1.325;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const [index, setIndex] = useState(0);

  const renderItem = (info: CarouselRenderType) => {
    return (
      <Image
        source={{ uri: info.item }}
        style={{
          width: width - 32,
          height: height / 2.25,
          borderRadius: 16,
        }}
      />
    );
  };

  return (
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

      {carousel ? (
        <>
          <Carousel
            layoutCardOffset={9}
            ref={isCarousel}
            data={product.imageUrls ?? []}
            renderItem={renderItem}
            sliderWidth={SLIDER_WIDTH}
            itemWidth={ITEM_WIDTH}
            inactiveSlideShift={0}
            onSnapToItem={indexItem => setIndex(indexItem)}
            useScrollView={true}
          />
          <Pagination
            dotsLength={product.imageUrls?.length ?? 0}
            activeDotIndex={index}
            carouselRef={isCarousel}
            containerStyle={{
              paddingVertical: 0,
              paddingTop: 12,
            }}
            dotContainerStyle={{
              marginHorizontal: 2,
            }}
            inactiveDotStyle={{
              width: 6,
              height: 6,
            }}
            dotStyle={{
              width: 14,
              height: 6,
              borderRadius: 5,
              paddingHorizontal: 0,
              marginHorizontal: 0,
              backgroundColor: Colors.orange,
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={0.8}
            tappableDots={true}
          />
        </>
      ) : (
        <Image
          source={{
            uri: product.imageUrls?.[0] ?? '',
          }}
          style={{
            width: width - 32,
            height: height / 2.25,
            borderRadius: 16,
          }}
        />
      )}
    </View>
  );
};

export default ProductImageComponent;
