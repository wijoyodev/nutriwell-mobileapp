/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import TrackingComponent from './components/TrackingComponent';
import useGetTracking from './service/useGetTracking';
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';

const TrackingScreen = () => {
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const { tracking, loading } = useGetTracking(params?.shipment_number);

  const timelineItems = tracking?.history
    ?.map(item => ({
      description: item.note,
      date: new Date(item.updated_at),
    }))
    .sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16,
          borderBottomColor: Colors.grey,
          borderBottomWidth: 6,
        }}>
        <Text style={{ fontSize: 14, color: Colors.black }}>No. Resi</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
          <Text
            style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
            {params?.shipment_number}
          </Text>
          <Icon
            onPress={() => Clipboard.setString(tracking?.resi ?? '')}
            name={'content-copy'}
            color={Colors.blue}
          />
        </View>
      </View>

      <TrackingComponent
        loading={loading ?? false}
        items={timelineItems ?? []}
      />
    </View>
  );
};

export default TrackingScreen;
