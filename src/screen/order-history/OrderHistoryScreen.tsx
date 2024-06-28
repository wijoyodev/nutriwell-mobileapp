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
import HistoryComponent from './components/HistoryComponent';
import Colors from 'themes/Colors';
import { useFocusEffect } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Utils from 'service/Utils';
import useGetOrderHistory, { OrderHistory } from './service/useGetOrderHistory';

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
    status: 4,
  },
];

const OrderHistoryScreen = () => {
  const [offset, setOffset] = useState(0);
  const [status, setStatus] = useState(0);
  const { loading, orderHistory } = useGetOrderHistory(status, offset);
  useFocusEffect(() => {
    StatusBar.setBackgroundColor(Colors.white);
    StatusBar.setBarStyle('dark-content');
  });

  const renderItem = (info: ListRenderItemInfo<OrderHistory>) => {
    return <HistoryComponent history={info.item} />;
  };

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

  const renderHistoryList = () => {
    if (orderHistory.length === 0) {
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
        data={orderHistory}
        renderItem={renderItem}
        onEndReached={() => {
          if (orderHistory.length > 0) {
            setOffset(orderHistory.length);
          }
        }}
        ListFooterComponent={<View style={{ marginBottom: 16 }} />}
      />
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      {loading && (
        <ActivityIndicator
          style={{ marginTop: 16 }}
          color={Colors.blue}
          size={'large'}
        />
      )}
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            padding: 0,
          },
          tabBarScrollEnabled: true,
          swipeEnabled: true,
          animationEnabled: false,
          tabBarLabel: ({ focused }) => tabBarLabel(focused, route.name),
        })}
        sceneContainerStyle={{ backgroundColor: Colors.white }}
        style={{ flex: 1 }}>
        {tabList.map(tab => (
          <Tab.Screen
            listeners={{
              tabPress: _ => {
                setStatus(tab.status);
                setOffset(0);
              },
            }}
            name={tab.title}
            children={renderHistoryList}
          />
        ))}
      </Tab.Navigator>
    </View>
  );
};

export default OrderHistoryScreen;
