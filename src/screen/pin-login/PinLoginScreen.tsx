/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomPin from 'components/CustomPin';
import { FORGET_PIN_SCREEN, HOME_SCREEN } from 'navigation/constants';
import login, { LoginResponse } from 'network/auth/login';
import { PublicAPIResponse } from 'network/model';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { setAccessToken, setAvatar, setBirthDate, setEmail, setFullName, setGender, setPhoneCountryCode, setPhoneNumber, setRefreshToken, setUserId } from 'service/StorageUtils';
import Colors from 'themes/Colors';

const PinLoginScreen = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute();
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (pin.length === 6) {
      handleLogin();
    }
  }, [pin]);

  const handleLogin = () => {
    setLoading(true);
    login({
      user_account: params?.email,
      password: pin,
    })
      .then(handleLoginResponse)
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleLoginResponse = async (
    response: PublicAPIResponse<LoginResponse>,
  ) => {
    setLoading(false);
    if (response.result) {
      await saveData(response.result);
      navigate(HOME_SCREEN);
    } else {
      // handle error
    }
  };

  const saveData = async (data: LoginResponse) => {
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
    await setPhoneCountryCode(data.phone_number_country)
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 16,
        paddingVertical: 24,
      }}>
      <View
        style={{
          marginTop: 32,
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <CustomPin value={pin} onChangeValue={setPin} />
        <Text
          onPress={() => navigate(FORGET_PIN_SCREEN)}
          style={{
            color: Colors.blue,
            fontSize: 14,
            fontWeight: 'bold',
            marginTop: 8,
          }}>
          Lupa PIN
        </Text>

        {loading && <ActivityIndicator />}
      </View>
    </View>
  );
};

export default PinLoginScreen;
