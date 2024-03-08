/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryDetail } from '../HistoryDetailScreen';
import dayjs from 'dayjs';
import Status from 'themes/Status';

export type HistoryStatusComponentProps = {
  history: HistoryDetail;
};

const HistoryStatusComponent: React.FC<HistoryStatusComponentProps> = ({
  history,
}) => {
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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 12,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>Invoice</Text>
        <Text style={{ fontSize: 14, color: Colors.blue, fontWeight: 'bold' }}>
          Lihat Invoice
        </Text>
      </View>
    </View>
  );
};

export default HistoryStatusComponent;
