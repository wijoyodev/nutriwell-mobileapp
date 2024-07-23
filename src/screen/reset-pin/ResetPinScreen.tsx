/* eslint-disable react-native/no-inline-styles */
import CustomPin from 'components/CustomPin';
import React, { useEffect, useRef, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HeaderBackButton } from '@react-navigation/elements';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import SuccessResetPinComponent from './components/SuccessResetPinComponent';
import resetPasswordToken from 'network/auth/reset-password-token';
import { LOGIN_SCREEN } from 'navigation/constants';
import updateProfile from 'network/auth/update-profile';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

const ResetPinScreen = () => {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();
  const route = useRoute<RouteProp<ParamListBase>>();
  const { token } = route.params;

  const [userId, setUserId] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [progress, setProgress] = useState(1);

  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const [error, setError] = useState('');

  const snackbarRef = useRef<CustomSnackbarHandle | null>();

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
      navigation.navigate(LOGIN_SCREEN);
    }
  };

  useEffect(() => {
    if (pin.length === 6) {
      setProgress(progress + 1);
    }
  }, [pin]);

  useEffect(() => {
    console.log('Token from params: ', token);
    if (token) {
      setProgress(1);
      setPin('');
      setConfirmPin('');
      setUserId('');
      setResetToken('');
      resetPasswordToken(token)
        .then(response => {
          console.log('Response verification email token: ', response);
          if (response?.result) {
            setUserId(response.result.user_id);
            setResetToken(response.result.resetToken);
          } else if (response.message === 'TokenExpiredError') {
            navigation.navigate(LOGIN_SCREEN, {
              isExpired: true,
            });
          }
        })
        .catch(err => {
          console.log('Error: ', err);
          navigation.navigate(LOGIN_SCREEN, {
            isExpired: true,
          });
        });
    }
  }, [token]);

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
    updateProfile(
      {
        password: pin,
        confirm_password: confirmPin,
      },
      resetToken,
      userId,
    ).then(response => {
      console.log('Response update new pin: ', response);
      if (response.result?.status) {
        setProgress(progress + 1);
      } else {
        snackbarRef?.current?.showSnackbarUnknownError();
      }
    });
  };

  if (!resetToken) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
          paddingVertical: 24,
        }}>
        <ActivityIndicator size={'large'} color={Colors.blue} />
      </View>
    );
  }

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
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </View>
  );
};

export default ResetPinScreen;
