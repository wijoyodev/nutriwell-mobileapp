/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryDetail } from '../HistoryDetailScreen';
import dayjs from 'dayjs';

export type PaymentMethodComponentProps = {
  history: HistoryDetail;
};

const PaymentMethodComponent: React.FC<PaymentMethodComponentProps> = ({
  history,
}) => {
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text style={{ marginBottom: 8 }}>METODE PEMBAYARAN</Text>

      <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 8 }}>
        {history.payment.name}
      </Text>
      {history.payment.approvedDate && (
        <Text style={{ fontSize: 12 }}>
          Dibayar pada{' '}
          {dayjs(history.payment.approvedDate).format('DD MMM YYYY HH:mm')}
        </Text>
      )}
    </View>
  );
};

export default PaymentMethodComponent;
