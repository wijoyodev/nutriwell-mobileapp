/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ListRenderItemInfo,
  StatusBar,
  Text,
  View,
} from 'react-native';
import HistoryComponent from './components/HistoryComponent';
import Colors from 'themes/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Utils from 'service/Utils';
import useGetOrderHistory from './service/useGetOrderHistory';

export type OrderHistory = {
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
  {
    title: 'DIBATALKAN',
    status: -1,
  },
];

const OrderHistoryScreen = () => {
  const { loading, orderHistory } = useGetOrderHistory();
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const renderItem = (info: ListRenderItemInfo<OrderHistory>) => {
    return <HistoryComponent history={info.item} />;
  };

  const groupHistory = Utils.groupBy(
    orderHistory ?? [],
    history => history.status,
  );

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

  const renderHistoryList = (status: number) => {
    const histories = groupHistory.get(status) ?? [];
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
            Belum ada pesanan, nih. Yuk, mulai belanja!
          </Text>
        </View>
      );
    }

    return (
      <FlatList
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
            children={() => renderHistoryList(tab.status)}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default OrderHistoryScreen;
