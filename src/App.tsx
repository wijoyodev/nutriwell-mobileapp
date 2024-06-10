/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import Router from 'navigation/Router';
import React, { useEffect } from 'react';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  useEffect(() => {
    // mockApi();
  }, []);
  const config = {
    screens: {
      RegisterDataScreen: {
        path: 'verification-email/:token',
      },
      ResetPinScreen: {
        path: 'reset-password/:token',
      },
    },
  };
  return (
    <NavigationContainer
      linking={{
        prefixes: [
          'https://suitable-evidently-caribou.ngrok-free.app', // Universal Link
        ],
        config,
      }}>
      <Router />
    </NavigationContainer>
  );
}

export default App;
