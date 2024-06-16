/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useRef, useState } from 'react';
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
import createDisbursement, {
  DisbursementRequest,
} from 'network/reward/create-disbursement';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

const WithdrawScreen = () => {
  const snackbarRef = useRef<CustomSnackbarHandle | null>();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    createDisbursement(request)
      .then(response => {
        setLoading(false);
        console.log('Response create disbursement: ', response);
        if (response.result) {
          setProgress(2);
        } else {
          snackbarRef.current?.showSnackbarUnknownError();
        }
      })
      .catch(err => {
        console.log('Error create disbursement: ', err);
        setLoading(false);
        snackbarRef.current?.showSnackbarUnknownError();
      });
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {progress === 1 ? (
        <ProcessWithdrawComponent loading={loading} onSubmit={handleSubmit} />
      ) : (
        <SuccessWithdrawComponent />
      )}
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </View>
  );
};

export default WithdrawScreen;
