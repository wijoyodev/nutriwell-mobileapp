/* eslint-disable react-native/no-inline-styles */
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import { WITHDRAW_SCREEN } from 'navigation/constants';
import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from 'themes/Colors';

const RedeemableRewardComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  return (
    <View
      style={{
        marginHorizontal: 16,
        padding: 16,
        borderRadius: 16,
        backgroundColor: Colors.lightBlue,
      }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={'dollar'} />
            <Text style={{ fontSize: 12, marginHorizontal: 6 }}>
              Reward yang bisa dicairkan
            </Text>
            <Icon name={'info'} />
          </View>

          <Text
            style={{ fontSize: 20, fontWeight: 'bold', color: Colors.black }}>
            Rp21.500.000
          </Text>
        </View>

        <CustomButton
          onPress={() => navigate(WITHDRAW_SCREEN)}
          backgroundColor={Colors.blue}
          text={'TARIK'}
          containerStyle={{ paddingHorizontal: 16 }}
        />
      </View>

      <View style={{ flexDirection: 'row', marginTop: 12 }}>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={'dollar'} />
            <Text style={{ fontSize: 12, marginLeft: 6 }}>
              Reward Bulan ini
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontWeight: 'bold',
              marginTop: 4,
            }}>
            Rp1.500.000
          </Text>
        </View>
        <View style={{ flex: 2 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name={'user'} />
            <Text style={{ fontSize: 12, marginLeft: 6 }}>
              Reference Network
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: Colors.black,
              fontWeight: 'bold',
              marginTop: 4,
            }}>
            56
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RedeemableRewardComponent;
