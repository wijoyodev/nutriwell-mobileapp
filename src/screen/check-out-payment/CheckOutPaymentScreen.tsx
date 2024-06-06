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
  const { navigate, setOptions, goBack } =
    useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const invoice_url = params?.invoice_url;

  const onBack = () => {
    console.log('Params: ', params);
    if (params?.isHistory) {
      goBack?.();
    } else {
      navigate?.(HOME_SCREEN);
    }
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
        />
      )}
    </View>
  );
};

export default CheckOutPaymentScreen;
