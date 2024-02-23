/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { History } from '../RewardHistoryScreen';
import dayjs from 'dayjs';
import Colors from 'themes/Colors';

export type RewardHistoryItemProps = {
  history: History;
  index: number;
};

const RewardHistoryItem: React.FC<RewardHistoryItemProps> = ({
  history,
  index,
}) => {
  return (
    <View
      style={{
        padding: 16,
        borderTopColor: Colors.grey,
        borderTopWidth: index > 0 ? 1 : 0,
      }}>
      <Text style={{ fontSize: 12 }}>
        {dayjs(history.date).format('DD MMMM YYYY')}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {history.description}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            color: history.isIncome ? Colors.darkGreen : Colors.red,
          }}>
          {history.isIncome ? '+' : '-'} Rp{history.reward}
        </Text>
      </View>
    </View>
  );
};

export default RewardHistoryItem;
