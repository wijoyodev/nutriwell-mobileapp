/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { Invoice } from '../InvoiceScreen';

type OrderMethodComponentProps = {
  invoice: Invoice;
};

const OrderMethodComponent: React.FC<OrderMethodComponentProps> = ({
  invoice,
}) => {
  return (
    <View style={{ flexDirection: 'row', padding: 16 }}>
      <View style={{ flex: 2 }}>
        <Text style={{ color: Colors.grey2, fontSize: 12, marginBottom: 4 }}>
          KURIR
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {invoice.shippingOption?.courierName}{' '}
          {invoice.shippingOption?.courierServiceName}
        </Text>
      </View>
      <View style={{ flex: 2 }}>
        <Text style={{ color: Colors.grey2, fontSize: 12, marginBottom: 4 }}>
          METODE PEMBAYARAN
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {invoice.paymentMethod.name}
        </Text>
      </View>
    </View>
  );
};

export default OrderMethodComponent;
