/* eslint-disable react-native/no-inline-styles */
import CustomPin from 'components/CustomPin';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HeaderBackButton } from '@react-navigation/elements';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import SuccessResetPinComponent from './components/SuccessResetPinComponent';

const ResetPinScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const [progress, setProgress] = useState(1);

  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const [error, setError] = useState('');

  const headerLeft = (props: any) => (
    <HeaderBackButton {...props} onPress={onBack} />
  );

  useEffect(() => {
    navigation.setOptions({
      headerShown: progress <= 2,
      headerTitle: progress === 1 ? 'Lupa PIN' : 'Konfirmasi PIN',
      headerLeft,
    });
  }, [progress]);

  const onBack = () => {
    console.log('progress', progress);
    if (progress > 1) {
      setProgress(progress - 1);
      setPin('');
      setConfirmPin('');
      return;
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    if (pin.length === 6) {
      setProgress(progress + 1);
    }
  }, [pin]);

  useEffect(() => {
    if (confirmPin.length === 6) {
      if (confirmPin === pin) {
        resetPin();
      } else {
        setError('Pin tidak sesuai');
      }
    } else {
      setError('');
    }
  }, [pin, confirmPin]);

  const resetPin = () => {
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
      {progress <= 2 && (
        <Text
          style={{
            color: Colors.black,
            fontSize: 14,
            marginBottom: 40,
          }}>
          {progress === 1
            ? 'Silakan mengatur ulang PIN Anda.'
            : 'Silakan konfirmasi ulang pin Anda. Pastikan pin yang Anda masukkan sama.'}
        </Text>
      )}

      {progress === 1 && <CustomPin value={pin} onChangeValue={setPin} />}
      {progress === 2 && (
        <CustomPin value={confirmPin} onChangeValue={setConfirmPin} />
      )}
      {error && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 4,
          }}>
          <Text style={{ color: Colors.red }}>{error}</Text>
        </View>
      )}
      {progress === 3 && <SuccessResetPinComponent />}
    </View>
  );
};

export default ResetPinScreen;
