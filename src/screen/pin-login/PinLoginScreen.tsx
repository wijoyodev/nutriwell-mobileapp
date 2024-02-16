/* eslint-disable react-native/no-inline-styles */
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import CustomPin from 'components/CustomPin';
import { FORGET_PIN_SCREEN, HOME_SCREEN } from 'navigation/constants';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';

const PinLoginScreen = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const [pin, setPin] = useState('');
  useEffect(() => {
    if (pin.length === 6) {
      handleLogin();
    }
  }, [pin]);

  const handleLogin = () => {
    navigate(HOME_SCREEN);
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
