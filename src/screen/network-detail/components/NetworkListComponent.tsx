/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
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
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NETWORK_LEVEL_SCREEN } from 'navigation/constants';
import { NetworkTypeSummary } from 'screen/main-home/components/ReferenceNetworkComponent';

export type NetworkListComponentProps = {
  networks: NetworkTypeSummary[];
};

const NetworkListComponent: React.FC<NetworkListComponentProps> = ({
  networks,
}) => {
  const { params } = useRoute<RouteProp<ParamListBase>>();
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const renderItem = (info: ListRenderItemInfo<NetworkTypeSummary>) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigate(NETWORK_LEVEL_SCREEN, {
            level: info.item.level,
            user_id: params?.id,
          })
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
            <Text>{info.item.totalNetwork} network</Text>
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
      {(networks?.length ?? 0) > 0 ? (
        <FlatList data={networks} renderItem={renderItem} />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 24,
          }}>
          <Image
            source={require('../../../assets/images/empty-box.png')}
            style={{ height: 100, width: 100, marginBottom: 24 }}
          />
          <Text style={{ fontSize: 14, textAlign: 'center' }}>
            Belum memiliki reference network.
          </Text>
        </View>
      )}
    </View>
  );
};

export default NetworkListComponent;
