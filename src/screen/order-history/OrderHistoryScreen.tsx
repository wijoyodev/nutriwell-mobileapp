/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlatList, ListRenderItemInfo, View } from 'react-native';
import HistoryComponent from './components/HistoryComponent';
import Colors from 'themes/Colors';

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
];

const OrderHistoryScreen = () => {
  const renderItem = (info: ListRenderItemInfo<History>) => {
    return <HistoryComponent history={info.item} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={historyList}
        renderItem={renderItem}
        ListFooterComponent={<View style={{ marginBottom: 16 }} />}
      />
    </View>
  );
};

export default OrderHistoryScreen;
