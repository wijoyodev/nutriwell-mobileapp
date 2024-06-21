/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import { History } from '../RewardHistoryScreen';
import dayjs from 'dayjs';
import Colors from 'themes/Colors';
import Utils from 'service/Utils';

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
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontSize: 14,
            color: Colors.black,
            flexWrap: 'wrap',
            flex: 0.7,
          }}>
          {history.description}
        </Text>
        <Text
          style={{
            flex: 0.3,
            textAlign: 'right',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            fontSize: 14,
            fontWeight: 'bold',
            color: history.isIncome ? Colors.darkGreen : Colors.red,
          }}>
          {history.isIncome ? '+' : '-'} {Utils.getPriceString(history.reward)}
        </Text>
      </View>
    </View>
  );
};

export default RewardHistoryItem;
