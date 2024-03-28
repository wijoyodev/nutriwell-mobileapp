/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, ScrollView, View } from 'react-native';
import Colors from 'themes/Colors';
import InvoiceSummaryComponent from './components/InvoiceSummaryComponent';
import OrderSummaryComponent from './components/OrderSummaryComponent';
import OrderMethodComponent from './components/OrderMethodComponent';
import CustomButton from 'components/CustomButton';
import useGetInvoice from './service/useGetInvoice';

const InvoiceScreen = () => {
  const { loading, invoice } = useGetInvoice();
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {invoice !== undefined && (
        <>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <InvoiceSummaryComponent invoice={invoice} />
            <OrderSummaryComponent />
            <OrderMethodComponent />
          </ScrollView>
          <CustomButton
            containerStyle={{
              margin: 16,
              marginTop: 0,
              borderColor: Colors.blue,
              borderWidth: 1,
            }}
            text={'DOWNLOAD'}
            backgroundColor={Colors.white}
            textStyle={{ color: Colors.blue }}
          />
        </>
      )}
    </View>
  );
};

export default InvoiceScreen;
