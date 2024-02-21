/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { History, HistoryItem } from '../OrderHistoryScreen';
import Colors from 'themes/Colors';
import HistoryItemHeaderComponent from './HistoryItemHeaderComponent';
import HistoryItemComponent from './HistoryItemComponent';
import CustomButton from 'components/CustomButton';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { HISTORY_DETAIL_SCREEN } from 'navigation/constants';

export type HistoryProps = {
  history: History;
};

const HistoryComponent: React.FC<HistoryProps> = ({ history }) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const renderItem = (info: ListRenderItemInfo<HistoryItem>) => {
    return <HistoryItemComponent item={info.item} />;
  };

  return (
    <TouchableOpacity
      onPress={() => navigate(HISTORY_DETAIL_SCREEN)}
      style={{
        borderColor: Colors.grey,
        borderWidth: 1,
        borderRadius: 16,
        marginHorizontal: 16,
        marginTop: 16,
        padding: 16,
      }}>
      <HistoryItemHeaderComponent history={history} />
      <FlatList data={history.items} renderItem={renderItem} />
      <View
        style={{
          marginTop: 12,
          paddingVertical: 12,
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: Colors.grey,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{ color: Colors.black, fontSize: 12 }}>TOTAL</Text>
        <Text
          style={{ color: Colors.darkBlue, fontSize: 14, fontWeight: 'bold' }}>
          Rp{history.totalPrice}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 12,
        }}>
        <CustomButton
          containerStyle={{ paddingHorizontal: 12 }}
          backgroundColor={Colors.blue}
          text={'BAYAR SEKARANG'}
        />
      </View>
    </TouchableOpacity>
  );
};

export default HistoryComponent;
