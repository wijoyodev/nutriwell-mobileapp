/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import dayjs from 'dayjs';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { TRACKING_SCREEN } from 'navigation/constants';
import { HistoryDetail } from '../service/useGetHistoryDetail';

export type ShippingInfoComponentProps = {
  history: HistoryDetail;
};

const ShippingInfoComponent: React.FC<ShippingInfoComponentProps> = ({
  history,
}) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  if (!history.shipping.resi) {
    return <></>;
  }
  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text>INFORMASI PENGIRIMAN</Text>
        <Text
          onPress={() =>
            navigate(TRACKING_SCREEN, {
              shipment_number: history.shipping.resi,
            })
          }
          style={{ fontSize: 14, fontWeight: 'bold', color: Colors.blue }}>
          Lacak
        </Text>
      </View>

      <Text style={{ fontSize: 14, color: Colors.black, marginVertical: 8 }}>
        {history.shipping.name}
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: Colors.black,
          fontWeight: 'bold',
          marginBottom: 8,
        }}>
        No. Resi: {history.shipping.resi}
      </Text>
      <Text style={{ fontSize: 12 }}>
        Terkirim pada {dayjs(history.shipping.date).format('DD MMM YYYY HH:mm')}
      </Text>
    </View>
  );
};

export default ShippingInfoComponent;
