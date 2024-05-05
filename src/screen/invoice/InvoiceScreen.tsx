/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ScrollView, View } from 'react-native';
import Colors from 'themes/Colors';
import InvoiceSummaryComponent from './components/InvoiceSummaryComponent';
import OrderSummaryComponent from './components/OrderSummaryComponent';
import OrderMethodComponent from './components/OrderMethodComponent';
import CustomButton from 'components/CustomButton';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import {
  HistoryDetail,
  PaymentInfo,
} from 'screen/history-detail/service/useGetHistoryDetail';
import { Address, ShippingOption } from 'screen/check-out/CheckOutScreen';
import { HistoryItem } from 'screen/order-history/service/useGetOrderHistory';

export type Invoice = {
  orderId: string;
  totalPayment: number;
  paymentDate: Date;
  shippingAddress: Address;
  items: HistoryItem[];
  shippingCost: number;
  shippingOption: ShippingOption;
  paymentMethod: PaymentInfo;
};

const InvoiceScreen = () => {
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const history: HistoryDetail = params?.history;

  const convertHistoryToInvoice = (data: HistoryDetail) => {
    const invoice: Invoice = {
      orderId: data.orderId,
      totalPayment: data.totalPurchase,
      paymentDate: data.payment.approvedDate ?? new Date(),
      shippingAddress: { ...data.shippingAddress, code: '' },
      items: data.items,
      shippingCost: data.shipping.price,
      shippingOption: { ...data.shipping, etd: '' },
      paymentMethod: data.payment,
    };
    return invoice;
  };

  const invoice = convertHistoryToInvoice(history);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {invoice !== undefined && (
        <>
          <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
            <InvoiceSummaryComponent invoice={invoice} />
            <OrderSummaryComponent invoice={invoice} />
            <OrderMethodComponent invoice={invoice} />
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
