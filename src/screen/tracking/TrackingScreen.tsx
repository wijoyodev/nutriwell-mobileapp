/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Clipboard from '@react-native-clipboard/clipboard';
import TrackingComponent from './components/TrackingComponent';
import useGetTracking from './service/useGetTracking';

const TrackingScreen = () => {
  const { tracking, loading } = useGetTracking();
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
            {tracking?.resi}
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
        items={tracking?.items ?? []}
      />
    </View>
  );
};

export default TrackingScreen;
