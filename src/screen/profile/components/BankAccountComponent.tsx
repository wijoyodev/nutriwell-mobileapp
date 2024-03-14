/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';
import Colors from 'themes/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { BANK_ACCOUNT_SCREEN } from 'navigation/constants';
import { BankResponse } from 'network/auth/bank-account';
import useGetBankAccount from '../service/useGetBankAccount';

// bankValue = null;

export type BankAccountComponentProps = {};

const BankAccountComponent: React.FC<BankAccountComponentProps> = () => {
  const { loading, bankAccount } = useGetBankAccount();
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

      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      <TouchableOpacity
        onPress={() =>
          navigate(BANK_ACCOUNT_SCREEN, {
            data: bankAccount,
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
        {bankAccount ? (
          <View>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                fontWeight: 'bold',
                marginBottom: 4,
              }}>
              {bankAccount?.accountHolder}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {bankAccount?.bank?.name}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {bankAccount?.accountNumber}
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
