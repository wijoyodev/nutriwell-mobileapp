/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  StatusBar,
  Text,
  View,
} from 'react-native';
import HistoryComponent from './components/HistoryComponent';
import Colors from 'themes/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import utils from 'service/utils';

export type History = {
  orderId: string;
  createdDate: Date;
  status: number;
  items: HistoryItem[];
  totalPrice: number;
};

export type HistoryItem = {
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
};

const historyList: History[] = [
  {
    orderId: '#934229034',
    createdDate: new Date(),
    status: 0,
    items: [
      {
        name: 'GARAM Kurang Natrium 200 gram',
        quantity: 20,
        price: 1250000,
        imageUrl: '',
      },
      {
        name: 'GARAM Kurang Natrium 200 gram',
        quantity: 20,
        price: 1250000,
        imageUrl: '',
      },
    ],
    totalPrice: 3120000,
  },
  {
    orderId: '#934229034',
    createdDate: new Date(),
    status: 0,
    items: [
      {
        name: 'GARAM Kurang Natrium 200 gram',
        quantity: 20,
        price: 1250000,
        imageUrl: '',
      },
    ],
    totalPrice: 3120000,
  },
  {
    orderId: '#934229034',
    createdDate: new Date(),
    status: 1,
    items: [
      {
        name: 'GARAM Kurang Natrium 200 gram',
        quantity: 20,
        price: 1250000,
        imageUrl: '',
      },
    ],
    totalPrice: 3120000,
  },
];

const Tab = createMaterialTopTabNavigator();

type TabType = {
  title: string;
  status: number;
};

const tabList: TabType[] = [
  {
    title: 'BELUM BAYAR',
    status: 0,
  },
  {
    title: 'DIKEMAS',
    status: 1,
  },
  {
    title: 'DIKIRIM',
    status: 2,
  },
  {
    title: 'SELESAI',
    status: 3,
  },
];

const OrderHistoryScreen = () => {
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const renderItem = (info: ListRenderItemInfo<History>) => {
    return <HistoryComponent history={info.item} />;
  };

  const groupHistory = utils.groupBy(historyList, history => history.status);

  const tabBarLabel = (focused: boolean, name: string) => {
    return (
      <View>
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

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            padding: 0,
          },
          swipeEnabled: true,
          tabBarLabel: ({ focused }) => tabBarLabel(focused, route.name),
        })}
        sceneContainerStyle={{ backgroundColor: Colors.white }}
        style={{ flex: 1 }}>
        {tabList.map(tab => (
          <Tab.Screen
            name={tab.title}
            children={() => (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={groupHistory.get(tab.status) ?? []}
                renderItem={renderItem}
                ListFooterComponent={<View style={{ marginBottom: 16 }} />}
              />
            )}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default OrderHistoryScreen;
