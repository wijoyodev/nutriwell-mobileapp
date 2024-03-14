/* eslint-disable react-native/no-inline-styles */
import { imageUrlTes } from 'mock-api/constant';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  View,
  useWindowDimensions,
} from 'react-native';
import Colors from 'themes/Colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export type CarouselItem = {
  imageUrl: string;
};

const data: CarouselItem[] = [
  {
    imageUrl: imageUrlTes,
  },
  {
    imageUrl: imageUrlTes,
  },
  {
    imageUrl: imageUrlTes,
  },
];

type CarouselRenderType = {
  item: CarouselItem;
  index: number;
};

const CarouselComponent = () => {
  const { width } = useWindowDimensions();
  const [heightView, setHeightView] = useState(0);
  const [index, setIndex] = useState(0);

  const SLIDER_WIDTH = Dimensions.get('window').width * 1.325;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const isCarousel = React.useRef(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeightView(height);
  };

  const renderItem = (info: CarouselRenderType) => {
    return (
      <Image
        source={{ uri: info.item.imageUrl }}
        style={{ height: 150, width: width - 32, borderRadius: 22 }}
      />
    );
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
      <View
        style={{
          backgroundColor: Colors.blue,
          height: 150 / 2,
          width: width,
          position: 'absolute',
          borderBottomStartRadius: 16,
          borderBottomEndRadius: 16,
        }}
      />
      {/* <Image
        source={require('../../../assets/images/product_image.png')}
        style={{ height: 150, width: width - 32, borderRadius: 22 }}
      /> */}
      <View>
        <Carousel
          layoutCardOffset={9}
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={indexItem => setIndex(indexItem)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={data.length}
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
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.8}
          tappableDots={true}
        />
      </View>
    </View>
  );
};

export default CarouselComponent;
