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

const FooterCartComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

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
          Rp1.500.000
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
