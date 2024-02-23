/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import RewardSummaryComponent from './components/RewardSummaryComponent';
import Colors from 'themes/Colors';
import RewardHistoryItem from './components/RewardHistoryItem';

export type History = {
  date: Date;
  description: string;
  reward: number;
  isIncome: boolean;
};

const historyList: History[] = [
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: true,
  },
  {
    date: new Date(),
    description: 'Pembelian Produk dari Brenda (Level 3)',
    reward: 15000,
    isIncome: false,
  },
];

const RewardHistoryScreen = () => {
  const renderItem = (info: ListRenderItemInfo<History>) => {
    return <RewardHistoryItem history={info.item} index={info.index} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <RewardSummaryComponent />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={historyList}
        renderItem={renderItem}
      />
    </View>
  );
};

export default RewardHistoryScreen;
