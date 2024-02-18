import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { HOME_SCREEN, REGISTER_SCREEN } from 'navigation/constants';
import React from 'react';
import { ActivityIndicator, Button, Image, Text, View } from 'react-native';

export type SplashScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({
  navigation: { navigate },
}) => {
  return (
    <View>
      <ActivityIndicator size={'large'} />
      <Image source={require('../../assets/images/splash_image.png')} />
      <Text>{'Ini Splash Screen'}</Text>
      <Button
        onPress={() => navigate(REGISTER_SCREEN)}
        title={'Go to register'}
      />

      <Button onPress={() => navigate(HOME_SCREEN)} title={'Go to home'} />
    </View>
  );
};

export default SplashScreen;
