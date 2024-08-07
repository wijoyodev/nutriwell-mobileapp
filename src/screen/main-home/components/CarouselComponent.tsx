/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  LayoutChangeEvent,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Colors from 'themes/Colors';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import useGetBanner from '../service/useGetBanner';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { BANNER_CONTENT_SCREEN } from 'navigation/constants';

export type CarouselItem = {
  imageUrl: string;
  title: string;
  description: string;
};

type CarouselRenderType = {
  item: CarouselItem;
  index: number;
};

const CarouselComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { width, height } = useWindowDimensions();
  const [heightView, setHeightView] = useState(0);
  const [index, setIndex] = useState(0);

  const { loading, banners } = useGetBanner();

  const SLIDER_WIDTH = Dimensions.get('window').width * 1.325;
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);

  const isCarousel = React.useRef(null);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeightView(height);
  };

  const renderItem = (info: CarouselRenderType) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(BANNER_CONTENT_SCREEN, info.item)}>
        <Image
          resizeMethod={'scale'}
          resizeMode={'stretch'}
          // borderRadius={22}
          width={width - 32}
          height={height / 5}
          source={{ uri: info.item.imageUrl }}
          style={{ borderRadius: 22 }}
        />
      </TouchableOpacity>
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
          data={banners ?? []}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={indexItem => setIndex(indexItem)}
          useScrollView={true}
        />
        <Pagination
          dotsLength={banners?.length ?? 0}
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
      </View>
    </View>
  );
};

export default CarouselComponent;
