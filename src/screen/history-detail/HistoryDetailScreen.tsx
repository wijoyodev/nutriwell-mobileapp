/* eslint-disable react-native/no-inline-styles */
import CustomButton from 'components/CustomButton';
import React from 'react';
import { ActivityIndicator, ScrollView, StatusBar, View } from 'react-native';
import Colors from 'themes/Colors';
import HeaderStatusComponent from './components/HeaderStatusComponent';
import HistoryStatusComponent from './components/HistoryStatusComponent';
import ShippingAddressComponent from './components/ShippingAddressComponent';
import PaymentMethodComponent from './components/PaymentMethodComponent';
import OrderHistoryComponent from './components/OrderHistoryComponent';
import ShippingInfoComponent from './components/ShippingInfoComponent';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import useGetHistoryDetail from './service/useGetHistoryDetail';
import { CHECK_OUT_PAYMENT_SCREEN } from 'navigation/constants';

const HistoryDetailScreen = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const {
    historyDetail: history,
    loading,
    ppnTax,
  } = useGetHistoryDetail(params?.id);

  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingBottom: 16 }}>
        {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
        {history !== undefined && (
          <>
            <HeaderStatusComponent history={history} />
            <HistoryStatusComponent tax={ppnTax} history={history} />
            <ShippingInfoComponent history={history} />
            <ShippingAddressComponent history={history} />
            <PaymentMethodComponent history={history} />
            <OrderHistoryComponent tax={ppnTax} history={history} />
          </>
        )}
      </ScrollView>
      <View style={{ padding: 16, paddingTop: 0 }}>
        {(history?.status ?? 4) === 0 && (
          <CustomButton
            onPress={() => {
              navigate(CHECK_OUT_PAYMENT_SCREEN, {
                invoice_url: history?.payment.paymentUrl,
                isHistory: true,
              });
            }}
            backgroundColor={Colors.blue}
            text={'BAYAR SEKARANG'}
          />
        )}
      </View>
    </View>
  );
};

export default HistoryDetailScreen;
