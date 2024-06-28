/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import dayjs from 'dayjs';
import Status from 'themes/Status';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { INVOICE_SCREEN } from 'navigation/constants';
import { HistoryDetail } from '../service/useGetHistoryDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type HistoryStatusComponentProps = {
  history: HistoryDetail;
  tax: number;
};

const HistoryStatusComponent: React.FC<HistoryStatusComponentProps> = ({
  history,
  tax,
}) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const statusLabel = Status.get(history.status)?.label ?? '';
  const statusColor = Status.get(history.status)?.color ?? '';
  return (
    <View style={{ padding: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>No. Pesanan</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          #{history.orderId}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Waktu Pesanan</Text>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {dayjs(history.createdDate)
            .locale('id-ID')
            .format('DD MMM YYYY HH:mm')}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Status</Text>
        <Text style={{ fontSize: 14, color: statusColor }}>{statusLabel}</Text>
      </View>

      {history.status > 0 && history.status < 4 && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 12,
          }}>
          <Text style={{ fontSize: 14, color: Colors.black }}>Invoice</Text>
          <TouchableOpacity
            onPress={() =>
              navigate(INVOICE_SCREEN, {
                history,
                tax,
              })
            }
            style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Icon name={'file-outline'} color={Colors.blue} />
            <Text
              style={{ fontSize: 14, color: Colors.blue, fontWeight: 'bold' }}>
              Lihat Invoice
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default HistoryStatusComponent;
