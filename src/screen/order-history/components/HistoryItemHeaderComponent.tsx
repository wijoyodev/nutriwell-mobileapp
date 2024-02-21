/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryProps } from './HistoryComponent';

const HistoryItemHeaderComponent: React.FC<HistoryProps> = ({ history }) => {
  const getStatusLabel = (status: number) => {
    switch (status) {
      case 0:
        return 'Belum Bayar';
      case 1:
        return 'Dikemas';
      case 2:
        return 'Dikirim';
      case 3:
        return 'Selesai';
      default:
        return 'Belum Bayar';
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Colors.grey,
        paddingBottom: 12,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 8,
        }}>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {dayjs(history.createdDate).locale('id').format('DD MMM YYYY')}
        </Text>
        <Text style={{ color: Colors.black, fontSize: 14 }}>
          {history.orderId}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 14,
          color: history.status < 3 ? Colors.orange : Colors.green,
        }}>
        {getStatusLabel(history.status)}
      </Text>
    </View>
  );
};

export default HistoryItemHeaderComponent;
