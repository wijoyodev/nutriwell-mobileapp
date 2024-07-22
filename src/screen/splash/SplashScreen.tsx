/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import { HOME_SCREEN, LOGIN_SCREEN, REGISTER_SCREEN, TRACKING_SCREEN } from 'navigation/constants';
import React, { useEffect } from 'react';
import { Button, Image, Linking, StatusBar, View } from 'react-native';
import { getAccessToken } from 'service/StorageUtils';
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

  const checkToken = async () => {
    const token = await getAccessToken();
    if (token) {
      navigate(HOME_SCREEN);
    } else {
      navigate(LOGIN_SCREEN);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.darkBlue,
      }}>
      <Image source={require('../../assets/images/splash_image.png')} />
    </View>
  );
};

export default SplashScreen;
