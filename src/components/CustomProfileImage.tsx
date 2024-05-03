/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ActivityIndicator, ImageBackground, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';

export type CustomProfileImageProps = {
  imageUrl?: string;
  size: number;
  image?: any;
};

const CustomProfileImage: React.FC<CustomProfileImageProps> = ({
  imageUrl,
  size,
  image,
}) => {
  const [loadingImage, setLoadingImage] = useState<boolean>(false);

  const source = image ? image : { uri: imageUrl };
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        height: size,
        width: size,
        borderRadius: size,
      }}>
      <ImageBackground
        onLoadStart={() => setLoadingImage(true)}
        onLoad={() => setLoadingImage(false)}
        source={source}
        borderRadius={size}
        style={{
          height: size,
          width: size,
          borderRadius: size,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!loadingImage && !imageUrl && !image && (
          <Icon name={'person-circle-sharp'} color={Colors.blue} size={size} />
        )}
        {loadingImage && <ActivityIndicator color={Colors.blue} />}
      </ImageBackground>
    </View>
  );
};

export default CustomProfileImage;
