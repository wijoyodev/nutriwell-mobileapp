/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { HistoryProps } from './HistoryComponent';
import Status from 'themes/Status';

const HistoryItemHeaderComponent: React.FC<HistoryProps> = ({ history }) => {
  const statusLabel = Status.get(history.status)?.label ?? '';
  const statusColor = Status.get(history.status)?.color ?? '';

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
          color: statusColor,
        }}>
        {statusLabel}
      </Text>
    </View>
  );
};

export default HistoryItemHeaderComponent;
