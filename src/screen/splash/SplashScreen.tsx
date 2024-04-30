/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
} from '@react-navigation/native';
import { HOME_SCREEN, REGISTER_SCREEN, TRACKING_SCREEN } from 'navigation/constants';
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
      navigate(HOME_SCREEN)
    } else {
      navigate(REGISTER_SCREEN);
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
      <Button
        onPress={() => navigate(REGISTER_SCREEN)}
        title={'Go to register'}
      />

      <Button onPress={() => navigate(HOME_SCREEN)} title={'Go to home'} />

      <Button
        onPress={() => Linking.openURL('nutriwell://app/register')}
        title={'Go to Link URL'}
      />

      <Button
        onPress={() => navigate(TRACKING_SCREEN)}
        title={'Go to Tracking'}
      />
    </View>
  );
};

export default SplashScreen;
