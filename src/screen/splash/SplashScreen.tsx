/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import { HOME_SCREEN, REGISTER_SCREEN } from 'navigation/constants';
import React from 'react';
import { Button, Image, StatusBar, View } from 'react-native';
import Colors from 'themes/Colors';

export type SplashScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({
  navigation: { navigate },
}) => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.darkBlue);
    StatusBar.setBarStyle('light-content');
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkBlue,
      }}>
      <Image source={require('../../assets/images/splash_image.png')} />
      <Button
        onPress={() => navigate(REGISTER_SCREEN)}
        title={'Go to register'}
      />

      <Button onPress={() => navigate(HOME_SCREEN)} title={'Go to home'} />
    </View>
  );
};

export default SplashScreen;
