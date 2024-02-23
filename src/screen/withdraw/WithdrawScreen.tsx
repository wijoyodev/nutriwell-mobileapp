/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import CustomTextInput from 'components/CustomTextInput';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import Colors from 'themes/Colors';
import ProcessWithdrawComponent from './components/ProcessWithdrawComponent';
import SuccessWithdrawComponent from './components/SuccessWithdrawComponent';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

const WithdrawScreen = () => {
  const { setOptions } = useNavigation<NavigationProp<ParamListBase>>();
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    if (progress === 1) {
      setOptions({
        headerTitle: 'Tarik Dana',
        headerShown: true,
      });
    } else {
      setOptions({
        headerShown: false,
      });
    }
  }, [progress]);

  const handleSubmit = () => {
    setProgress(2);
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {progress === 1 ? (
        <ProcessWithdrawComponent onSubmit={handleSubmit} />
      ) : (
        <SuccessWithdrawComponent />
      )}
    </View>
  );
};

export default WithdrawScreen;
