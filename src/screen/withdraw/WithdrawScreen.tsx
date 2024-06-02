/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StatusBar, View } from 'react-native';
import Colors from 'themes/Colors';
import ProcessWithdrawComponent from './components/ProcessWithdrawComponent';
import SuccessWithdrawComponent from './components/SuccessWithdrawComponent';
import {
  NavigationProp,
  ParamListBase,
  useFocusEffect,
  useNavigation,
} from '@react-navigation/native';
import createDisbursement, { DisbursementRequest } from 'network/reward/create-disbursement';

const WithdrawScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

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

  const handleSubmit = (request: DisbursementRequest) => {
    console.log('Request disbursement: ', request);
    createDisbursement(request).then(response => {
      if (response.result) {
        setProgress(2);
      } else {
        console.log('Error');
        // TODO: show snackbar
      }
    });
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
