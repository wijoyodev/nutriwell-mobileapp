/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { NETWORK_LEVEL_SCREEN } from 'navigation/constants';

type Network = {
  level: number;
  total: number;
};

const networkList: Network[] = [
  {
    level: 1,
    total: 100,
  },
  {
    level: 2,
    total: 200,
  },
  {
    level: 3,
    total: 200,
  },
  {
    level: 4,
    total: 200,
  },
];

const NetworkListComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const renderItem = (info: ListRenderItemInfo<Network>) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigate(NETWORK_LEVEL_SCREEN, { level: info.item.level })
        }
        style={{
          paddingHorizontal: 16,
          paddingVertical: 12,
          borderColor: Colors.grey,
          borderWidth: 1,
          borderRadius: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 12,
        }}>
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              color: Colors.black,
              marginBottom: 2,
            }}>
            Level {info.item.level}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <Icon name={'people-outline'} />
            <Text>{info.item.total} network</Text>
          </View>
        </View>
        <Icon name={'chevron-forward-outline'} size={20} color={Colors.black} />
      </TouchableOpacity>
    );
  };
  return (
    <View
      style={{ borderTopColor: Colors.grey, borderTopWidth: 4, padding: 16 }}>
      <Text>REFERENCE NETWORK</Text>
      <FlatList data={networkList} renderItem={renderItem} />
    </View>
  );
};

export default NetworkListComponent;
