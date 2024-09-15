/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import Router from 'navigation/Router';
import { DEEP_LINK_URL } from 'navigation/constants';
import { API_URL } from 'network/Api';
import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Colors from 'themes/Colors';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  const BACKOFFICE_URL = 'https://api.garenahealthy.com';
  const config = {
    screens: {
      LoginScreen: 'login',
      RegisterDataScreen: {
        path: 'verification-email/:token',
      },
      ResetPinScreen: {
        path: 'reset-password/:token',
      },
      RegisterScreen: {
        path: 'register/:code',
      },
    },
  };
  return (
    <KeyboardAvoidingView
      keyboardShouldPersistTaps="always"
      style={{ flex: 1, backgroundColor: Colors.grey }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}>
      <NavigationContainer
        linking={{
          prefixes: [
            API_URL, // Universal Link
            DEEP_LINK_URL, // Deep Link
            BACKOFFICE_URL,
          ],
          config,
        }}>
        <Router />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

export default App;
