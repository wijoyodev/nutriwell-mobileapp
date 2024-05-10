/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { CART_SCREEN, ORDER_HISTORY_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Colors from 'themes/Colors';

type ShopHeaderComponentProps = {
  quantity: number;
};

const ShopHeaderComponent: React.FC<ShopHeaderComponentProps> = ({
  quantity,
}) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <View
      style={{
        flexDirection: 'row',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: Colors.blue,
        alignItems: 'center',
      }}>
      <View style={{ flex: 3 }} />
      <View
        style={{
          // width,
          flex: 3,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{ fontSize: 16, color: Colors.white }}>Belanja</Text>
      </View>

      <View
        style={{ flexDirection: 'row', flex: 3, justifyContent: 'flex-end' }}>
        <TouchableOpacity
          onPress={() => navigate(ORDER_HISTORY_SCREEN)}
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 12,
            marginRight: 6,
          }}>
          <Icon name={'clock-rotate-left'} color={Colors.darkBlue} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate(CART_SCREEN)}
          style={{
            backgroundColor: Colors.white,
            paddingHorizontal: 10,
            paddingVertical: 8,
            borderRadius: 12,
            position: 'relative',
          }}>
          {quantity > 0 && (
            <View
              style={{
                position: 'absolute',
                backgroundColor: Colors.orangeIcon,
                width: 14,
                height: 14,
                borderRadius: 12,
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                right: -4,
                top: -4,
              }}>
              <Text style={{ fontSize: 8, color: Colors.white }}>
                {quantity}
              </Text>
            </View>
          )}

          <FeatherIcon name={'shopping-cart'} color={Colors.darkBlue} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShopHeaderComponent;
