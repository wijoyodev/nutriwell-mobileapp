/* eslint-disable react-native/no-inline-styles */
import { NavigationProp, ParamListBase, useNavigation, useRoute } from '@react-navigation/native';
import CustomPin from 'components/CustomPin';
import { FORGET_PIN_SCREEN, HOME_SCREEN, MAIN_HOME } from 'navigation/constants';
import login from 'network/auth/login';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const PinLoginScreen = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute();
  const [pin, setPin] = useState('');
  useEffect(() => {
    if (pin.length === 6) {
      handleLogin();
    }
  }, [pin]);

  const handleLogin = () => {
    login({
      email: params?.email,
      pin,
    }).then(response => {
      if (response.success) {
        navigate(MAIN_HOME);
      } else {
        // handle error
      }
    });
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
      </View>
    </View>
  );
};

export default PinLoginScreen;
