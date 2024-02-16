import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { REGISTER_SCREEN } from 'navigation/constants';
import React from 'react';
import { ActivityIndicator, Button, Text, View } from 'react-native';

export type SplashScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({
  navigation: { navigate },
}) => {
  return (
    <View>
      <ActivityIndicator size={'large'} />
      <Text>{'Ini Splash Screen'}</Text>
      <Button
        onPress={() => navigate(REGISTER_SCREEN)}
        title={'Go to register'}
      />
    </View>
  );
};

export default SplashScreen;
