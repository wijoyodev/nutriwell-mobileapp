/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import Router from 'navigation/Router';
import { API_URL } from 'network/Api';
import React, { useEffect } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import Colors from 'themes/Colors';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  const config = {
    screens: {
      LoginScreen: 'login',
      RegisterDataScreen: {
        path: 'verification-email/:token',
      },
      ResetPinScreen: {
        path: 'reset-password/:token',
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
          ],
          config,
        }}>
        <Router />
      </NavigationContainer>
    </KeyboardAvoidingView>
  );
}

export default App;
