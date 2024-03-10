/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import mockApi from 'mock-api';
import Router from 'navigation/Router';
import React, { useEffect } from 'react';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

function App(): React.JSX.Element {
  useEffect(() => {
    mockApi();
  }, []);
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
