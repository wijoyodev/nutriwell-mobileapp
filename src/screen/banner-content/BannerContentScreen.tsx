/* eslint-disable react-native/no-inline-styles */
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, Text, View, useWindowDimensions } from 'react-native';
import Colors from 'themes/Colors';

const BannerContentScreen = () => {
  const { params } = useRoute<RouteProp<ParamListBase>>();

  const { width } = useWindowDimensions();

  return (
    <View style={{ backgroundColor: Colors.white, flex: 1, padding: 16 }}>
      <Image
        source={{ uri: params?.imageUrl }}
        style={{ height: 150, width: width - 32, borderRadius: 22 }}
      />
      <Text
        style={{
          color: Colors.black,
          fontWeight: 'bold',
          fontSize: 14,
          marginTop: 16,
        }}>
        {params?.title}
      </Text>

      <Text style={{ color: Colors.black, fontSize: 14, marginTop: 8 }}>
        {params?.description}
      </Text>
    </View>
  );
};

export default BannerContentScreen;
