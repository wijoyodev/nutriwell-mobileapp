/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, StatusBar, View } from 'react-native';
import RewardSummaryComponent from './components/RewardSummaryComponent';
import Colors from 'themes/Colors';
import RewardHistoryItem from './components/RewardHistoryItem';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import utils from 'service/utils';

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

const Tab = createMaterialTopTabNavigator();

type TabType = {
  title: string;
  isIncome: boolean;
};

const tabList: TabType[] = [
  {
    title: 'REWARD',
    isIncome: true,
  },
  {
    title: 'PENARIKAN',
    isIncome: false,
  },
];

const RewardHistoryScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const renderItem = (info: ListRenderItemInfo<History>) => {
    return <RewardHistoryItem history={info.item} index={info.index} />;
  };

  const groupHistory = utils.groupBy(historyList, history => history.isIncome);

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <RewardSummaryComponent />
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: Colors.white }}
        style={{ flex: 1 }}>
        {tabList.map(tab => (
          <Tab.Screen
            name={tab.title}
            children={() => (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={groupHistory.get(tab.isIncome) ?? []}
                renderItem={renderItem}
              />
            )}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default RewardHistoryScreen;
