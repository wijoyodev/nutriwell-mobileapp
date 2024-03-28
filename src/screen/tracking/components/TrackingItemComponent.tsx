/* eslint-disable react-native/no-inline-styles */
import dayjs from 'dayjs';
import React, { useState } from 'react';
import { View, Text, LayoutChangeEvent } from 'react-native';
import { TrackingTimelineItem } from './TrackingComponent';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export type TrackingItemComponentProps = {
  index: number;
  size: number;
  item: TrackingTimelineItem;
};

const TrackingItemComponent: React.FC<TrackingItemComponentProps> = ({
  index,
  size,
  item,
}) => {
  const [heightView, setHeightView] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { height } = event.nativeEvent.layout;
    setHeightView(height);
  };

  return (
    <View
      onLayout={onLayout}
      style={{
        flexDirection: 'row',
        alignItems: 'stretch',
        gap: 12,
        paddingHorizontal: 16,
      }}>
      <View
        style={{
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: index === 0 ? 6 : 0,
        }}>
        {index !== 0 && (
          <View
            style={{
              height: 6,
              width: 1,
              backgroundColor: Colors.lightBlue3,
            }}
          />
        )}
        <View
          style={{
            backgroundColor: index === 0 ? Colors.blue : Colors.lightBlue3,
            width: 12,
            height: 12,
            borderRadius: 12,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {index === 0 && <Icon name={'check'} color={Colors.white} size={8} />}
        </View>
        {index < size - 1 && (
          <View
            style={{
              backgroundColor: Colors.lightBlue3,
              width: 1,
              height: heightView - 18,
            }}
          />
        )}
      </View>
      <View style={{ paddingRight: 16, paddingBottom: 16 }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>
          {item.description}
        </Text>
        <Text style={{ fontSize: 12 }}>
          {dayjs(item.date).format('DD/MM/YYYY HH:mm')}
        </Text>
      </View>
    </View>
  );
};

export default TrackingItemComponent;
