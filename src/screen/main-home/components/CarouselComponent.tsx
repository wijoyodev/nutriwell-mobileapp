/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Image, LayoutChangeEvent, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';

const CarouselComponent = () => {
  const { width } = useWindowDimensions();
  const [heightView, setHeightView] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeightView(height);
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
      <Image
        source={require('../../../assets/images/product_image.png')}
        style={{ height: 150, width: width - 32, borderRadius: 22 }}
      />
    </View>
  );
};

export default CarouselComponent;
