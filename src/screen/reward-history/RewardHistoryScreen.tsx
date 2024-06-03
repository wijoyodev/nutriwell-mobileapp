/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItemInfo,
  StatusBar,
  Text,
  View,
} from 'react-native';
import RewardSummaryComponent from './components/RewardSummaryComponent';
import Colors from 'themes/Colors';
import RewardHistoryItem from './components/RewardHistoryItem';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import useGetRewardHistory from './service/useGetRewardHistory';
import useGetDisbursement from './service/useGetDisbursement';

export type RewardHistory = {
  date: Date;
  description: string;
  reward: number;
  isIncome: boolean;
};

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
  const [offset, setOffset] = useState(0);

  const { rewardHistory } = useGetRewardHistory();
  const { disbursementHistory, totalWithdraw, totalReward, loading } =
    useGetDisbursement(offset);
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const renderItem = (info: ListRenderItemInfo<RewardHistory>) => {
    return <RewardHistoryItem history={info.item} index={info.index} />;
  };

  const tabBarLabel = (focused: boolean, name: string) => {
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 14,
            // fontWeight: focused ? 'bold' : 'normal',
            color: focused ? Colors.blue : Colors.disabled,
          }}>
          {name}
        </Text>
      </View>
    );
  };

  const renderHistoryList = (isIncome: boolean) => {
    const histories = isIncome ? rewardHistory : disbursementHistory;
    if (histories.length === 0) {
      return (
        <View
          style={{
            flex: 0.75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/images/empty-box.png')}
            style={{ height: 100, width: 100, marginBottom: 24 }}
          />
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Belum ada data
          </Text>
        </View>
      );
    }

    return (
      <FlatList
        onEndReached={() => {
          if (!isIncome) {
            if (disbursementHistory.length > 0) {
              setOffset(disbursementHistory.length);
            }
          }
        }}
        showsVerticalScrollIndicator={false}
        data={histories}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ marginBottom: 16 }} />}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {!loading && (
        <RewardSummaryComponent
          totalReward={totalReward}
          totalWithdraw={totalWithdraw}
        />
      )}

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ focused }) => tabBarLabel(focused, route.name),
        })}
        sceneContainerStyle={{ backgroundColor: Colors.white }}
        style={{ flex: 1 }}>
        {tabList.map(tab => (
          <Tab.Screen
            name={tab.title}
            children={() => renderHistoryList(tab.isIncome)}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default RewardHistoryScreen;
