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
import Icon from 'react-native-vector-icons/FontAwesome';
import { CartItem } from '../CartScreen';

export type ListItemComponentProps = {
  items?: CartItem[];
};

const ListItemComponent: React.FC<ListItemComponentProps> = ({ items }) => {
  const renderItem = (info: ListRenderItemInfo<CartItem>) => {
    return (
      <View style={{ flexDirection: 'row', gap: 12, marginTop: 16 }}>
        <Image
          source={require('../../../assets/images/product_image.png')}
          style={{
            height: 88,
            width: 88,
            borderRadius: 8,
          }}
        />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'space-between',
            flex: 1,
          }}>
          <View>
            <Text
              style={{ color: Colors.black, fontSize: 14, marginBottom: 4 }}>
              {info.item.name}
            </Text>
            <Text
              style={{ color: Colors.black, fontSize: 14, fontWeight: 'bold' }}>
              {info.item.price}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 12,
            }}>
            <TouchableOpacity
              style={{
                borderColor: Colors.blue,
                borderWidth: 1,
                borderRadius: 14,
                backgroundColor: Colors.white,
                height: 28,
                width: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name={'minus'} color={Colors.blue} />
            </TouchableOpacity>
            <Text style={{ color: Colors.black, fontSize: 14 }}>
              {info.item.quantity}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.blue,
                borderRadius: 14,
                height: 28,
                width: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name={'plus'} color={Colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 16 }} />}
      />
    </View>
  );
};

export default ListItemComponent;
