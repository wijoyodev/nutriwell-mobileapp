/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { CHECK_OUT_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { CartItem } from '../CartScreen';
import Utils from 'service/Utils';

export type FooterCartComponentProps = {
  items?: CartItem[];
};

const FooterCartComponent: React.FC<FooterCartComponentProps> = ({ items }) => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const getTotalPrice = () => {
    const totalItemPriceList =
      items?.map(item => item.priceAfterTax * item.quantity) ?? [];
    return totalItemPriceList.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
  };

  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: Colors.grey,
        borderTopWidth: 1,
      }}>
      <View>
        <Text style={{ fontSize: 12 }}>TOTAL BELANJA</Text>
        <Text style={{ color: Colors.black, fontSize: 16, fontWeight: 'bold' }}>
          {Utils.getPriceString(getTotalPrice())}
        </Text>
      </View>
      <CustomButton
        onPress={() => navigate(CHECK_OUT_SCREEN)}
        containerStyle={{ paddingHorizontal: 16 }}
        backgroundColor={Colors.blue}
        text={'CHECK OUT'}
      />
    </View>
  );
};

export default FooterCartComponent;
