/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { HeaderBackButton } from '@react-navigation/elements';
import { HOME_SCREEN } from 'navigation/constants';

const CheckOutPaymentScreen = () => {
  const { navigate, setOptions } =
    useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const invoice_url = params?.invoice_url;

  const onBack = () => {
    navigate(HOME_SCREEN);
  };

  const headerLeft = (props: any) => (
    <HeaderBackButton {...props} onPress={onBack} />
  );

  useEffect(() => {
    setOptions({
      headerLeft,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {invoice_url && (
        <WebView
          originWhitelist={['*']}
          source={{ uri: invoice_url }}
          style={{
            width: '100%',
            height: Dimensions.get('window').height,
            flex: 1,
            backgroundColor: '#e5e5e5',
          }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mixedContentMode={'always'}
          nestedScrollEnabled
          onNavigationStateChange={evt => {
            if (evt.url.indexOf('callback') != -1) {
              navigate('ThankyouScreen', {
                title: 'Thank You',
                content: `Terima kasih telah subscribe di Mentorbaik.\nSemoga perjalanan investasi anda memberikan hasil yang baik.\r\n\r\nJika ada pertanyaan, silakan email:\r\n mentorbaik.info@gmail.com`,
              });
            }
          }}
        />
      )}
    </View>
  );
};

export default CheckOutPaymentScreen;
