/* eslint-disable react-native/no-inline-styles */
import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Snackbar } from 'react-native-paper';
import { Text } from 'react-native';
import Colors from 'themes/Colors';

export type CustomSnackbarHandle = {
  showSnackbarSuccess: (text: string) => void;
  showSnackbarError: (text: string) => void;
  showSnackbarUnknownError: () => void;
};

const CustomSnackbar = forwardRef<CustomSnackbarHandle, {}>((_, ref) => {
  useImperativeHandle(ref, () => ({
    showSnackbarSuccess(text: string) {
      setIsError(false);
      setSnackbarText(text);
      setSnackbar(true);
    },

    showSnackbarError(text: string) {
      setIsError(true);
      setSnackbarText(text);
      setSnackbar(true);
    },

    showSnackbarUnknownError() {
      setIsError(true);
      setSnackbarText(
        'Sedang terjadi masalah. Silakan coba beberapa saat lagi.',
      );
      setSnackbar(true);
    },
  }));

  const [snackbar, setSnackbar] = useState(false);
  const [snackbarText, setSnackbarText] = useState('');
  const [isError, setIsError] = useState(false);
  const hideSnackbar = () => {
    setSnackbar(false);
  };
  return (
    <Snackbar
      theme={{ colors: { accent: isError ? Colors.white : Colors.blue } }}
      wrapperStyle={{
        flex: 1,
        alignSelf: 'center',
        width: '90%',
        marginBottom: 12,
      }}
      style={{
        backgroundColor: isError ? Colors.red : Colors.green,
      }}
      visible={snackbar}
      onDismiss={hideSnackbar}
      action={{
        label: 'OK',
        onPress: hideSnackbar,
      }}>
      <Text style={{ color: isError ? Colors.white : Colors.darkGreen }}>
        {snackbarText}
      </Text>
    </Snackbar>
  );
});

export default CustomSnackbar;
