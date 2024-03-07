/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { BANK_ACCOUNT_SCREEN } from 'navigation/constants';
import { BankForm } from 'screen/bank-account/BankAccountScreen';

let bankValue: BankForm = {
  bank: {
    name: 'BCA',
  },
  accountHolder: 'Yahya',
  accountNumber: '812736152',
};

// bankValue = null;

const BankAccountComponent = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();

  const renderEmptyBank = () => (
    <View>
      <Text style={{ fontSize: 14, color: Colors.black, fontWeight: 'bold' }}>
        Belum ada akun bank
      </Text>
      <Text style={{ fontSize: 14, color: Colors.black, marginTop: 6 }}>
        Tambah akun bank untuk dapat menarik komisi Anda
      </Text>
    </View>
  );

  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text>AKUN BANK</Text>

      <TouchableOpacity
        onPress={() =>
          navigate(BANK_ACCOUNT_SCREEN, {
            data: bankValue,
          })
        }
        style={{
          marginTop: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: Colors.grey,
          borderRadius: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {bankValue ? (
          <View>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                fontWeight: 'bold',
                marginBottom: 4,
              }}>
              {bankValue?.accountHolder}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {bankValue?.bank?.name}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {bankValue?.accountNumber}
            </Text>
          </View>
        ) : (
          renderEmptyBank()
        )}
        <Icon name={'angle-right'} color={Colors.black} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default BankAccountComponent;
