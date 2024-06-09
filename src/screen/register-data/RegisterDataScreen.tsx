/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
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
import InputProfileComponent, {
  ProfileForm,
} from './components/InputProfileComponent';
import SuccessRegisterComponent from './components/SuccessRegisterComponent';
import register, {
  RegisterRequest,
  RegisterResponse,
} from 'network/auth/register';
import { PublicAPIResponse } from 'network/model';
import {
  setAccessToken,
  setAvatar,
  setBirthDate,
  setEmail,
  setFullName,
  setGender,
  setPhoneCountryCode,
  setPhoneNumber,
  setReferralCode,
  setRefreshToken,
  setUserId,
} from 'service/StorageUtils';
import verificationEmailToken from 'network/auth/verification-email-token';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';
import { REGISTER_SCREEN } from 'navigation/constants';

export type RegisterDataScreenProps = {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase>;
};

const RegisterDataScreen: React.FC<RegisterDataScreenProps> = ({
  navigation,
  route,
}) => {
  const [emailData, setEmailData] = useState('');
  const [referrerCodeData, setReferrerCodeData] = useState('');

  const { token } = route.params;
  const { width } = useWindowDimensions();
  const [progress, setProgress] = useState(1);
  const [selectedPin, setSelectedPin] = useState('');

  const headerLeft = (props: any) => (
    <HeaderBackButton {...props} onPress={onBack} />
  );

  useEffect(() => {
    console.log('Token from params: ', token);
    if (token) {
      verificationEmailToken(token).then(response => {
        console.log('Response verification email token: ', response);
        if (response.result) {
          setEmailData(response.result.email);
          setReferrerCodeData(response.result.referrer_code);
        } else if (response.message === 'TokenExpiredError') {
          navigation.navigate(REGISTER_SCREEN, {
            isExpired: true,
          });
        }
      });
    }
  }, [token]);

  useEffect(() => {
    navigation.setOptions({
      headerLeft,
    });
  }, [progress]);

  const onBack = () => {
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

  const registerUser = (data: ProfileForm) => {
    const request: RegisterRequest = {
      email: data.email,
      referrer_code: referrerCodeData,
      password: selectedPin,
      confirm_password: selectedPin,
      phone_number: data.phoneNumber,
      phone_number_country: data.code,
      gender: data.gender,
      date_of_birth: data.birthDate.toISOString(),
      full_name: data.name,
    };

    if (data.image) {
      request.avatar = data.image;
    }
    register(request).then(handleRegisterResponse);
  };

  const handleRegisterResponse = async (
    response: PublicAPIResponse<RegisterResponse>,
  ) => {
    // setLoading(false);
    if (response.result) {
      await saveData(response.result);
      nextProgress();
    } else {
      // handle error
    }
  };

  const saveData = async (data: RegisterResponse) => {
    console.log('Response: ', data);
    await setAccessToken(data.token);
    await setRefreshToken(data.refreshToken);
    await setEmail(data.email);
    await setFullName(data.full_name);
    if (data.avatar_url) {
      await setAvatar(data.avatar_url);
    }
    await setGender(data.gender);
    await setBirthDate(data.date_of_birth);
    await setPhoneNumber(data.phone_number);
    await setUserId(data.user_id.toString());
    await setPhoneCountryCode(data.phone_number_country);
    await setReferralCode(data.referral_code);
  };

  const nextProgress = () => {
    setProgress(progress + 1);
  };

  if (!emailData) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
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
        <InputProfileComponent email={emailData} onComplete={registerUser} />
      )}
      {progress === 4 && <SuccessRegisterComponent />}
    </View>
  );
};

export default RegisterDataScreen;
