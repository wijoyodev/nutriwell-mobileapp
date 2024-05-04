/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  Text,
  View,
} from 'react-native';
import Colors from 'themes/Colors';
import TrackingItemComponent from './TrackingItemComponent';

export type TrackingTimelineItem = {
  description: string;
  date: Date;
};

export type TrackingComponentProps = {
  loading: boolean;
  items: TrackingTimelineItem[];
};

const TrackingComponent: React.FC<TrackingComponentProps> = ({
  loading,
  items,
}) => {
  const renderItem = (info: ListRenderItemInfo<TrackingTimelineItem>) => {
    return (
      <TrackingItemComponent
        key={info.index}
        index={info.index}
        size={items.length}
        item={info.item}
      />
    );
  };

  return (
    <View style={{ paddingVertical: 16 }}>
      <Text
        style={{
          fontSize: 12,
          color: Colors.grey2,
          paddingHorizontal: 16,
          marginBottom: 16,
        }}>
        LACAK PESANAN
      </Text>
      <FlatList data={items} renderItem={renderItem} />
      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      {items.length === 0 && !loading && (
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: Colors.black }}>Belum ada info pengiriman</Text>
        </View>
      )}
    </View>
  );
};

export default TrackingComponent;
