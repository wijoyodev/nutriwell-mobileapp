/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import InputPinComponent from './components/InputPinComponent';
import ProgressBar from 'react-native-progress/Bar';
import Colors from 'themes/Colors';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import PinConfirmationComponent from './components/PinConfirmationComponent';
import InputProfileComponent from './components/InputProfileComponent';
import SuccessRegisterComponent from './components/SuccessRegisterComponent';

export type RegisterDataScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};

const RegisterDataScreen: React.FC<RegisterDataScreenProps> = ({
  navigation,
  route,
}) => {
  const { email, referralCode } = route.params;
  const { width } = useWindowDimensions();
  const [progress, setProgress] = useState(1);
  const [selectedPin, setSelectedPin] = useState('');

  const headerLeft = (props: any) => (
    <HeaderBackButton {...props} onPress={onBack} />
  );

  useEffect(() => {
    navigation.setOptions({
      headerLeft,
    });
  }, [progress]);

  const onBack = () => {
    console.log('progress', progress);
    if (progress > 1) {
      setProgress(progress - 1);
      return;
    } else {
      navigation.goBack();
    }
  };

  const onComplete = (pin: string) => {
    nextProgress();
    setSelectedPin(pin);
  };

  const nextProgress = () => {
    setProgress(progress + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}>
      {progress <= 3 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ProgressBar
            progress={progress / 3}
            width={width - 72}
            color={Colors.blue}
            unfilledColor={Colors.grey}
            borderWidth={0}
            borderRadius={20}
          />
          <Text style={{ color: Colors.black, fontSize: 14, marginLeft: 12 }}>
            {progress} / 3
          </Text>
        </View>
      )}

      {progress === 1 && <InputPinComponent onComplete={onComplete} />}
      {progress === 2 && (
        <PinConfirmationComponent
          selectedPin={selectedPin}
          onComplete={onComplete}
        />
      )}
      {progress === 3 && (
        <InputProfileComponent email={email} onComplete={nextProgress} />
      )}
      {progress === 4 && <SuccessRegisterComponent />}
    </View>
  );
};

export default RegisterDataScreen;
