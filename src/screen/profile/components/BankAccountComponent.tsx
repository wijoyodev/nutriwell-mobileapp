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
import { BankInfo } from '../service/useGetProfile';

// bankValue = null;

export type BankAccountComponentProps = {
  bankAccount: BankInfo;
  loading: boolean;
};

const BankAccountComponent: React.FC<BankAccountComponentProps> = ({ bankAccount, loading }) => {
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

  console.log('Bank Account: ', bankAccount);

  return (
    <View
      style={{ padding: 16, borderTopColor: Colors.grey, borderTopWidth: 4 }}>
      <Text>AKUN BANK</Text>

      {loading && <ActivityIndicator color={Colors.blue} size={'large'} />}
      <TouchableOpacity
        onPress={() => {
          if (bankAccount?.account_bank) {
            navigate(BANK_ACCOUNT_SCREEN, {
              data: bankAccount,
            });
          } else {
            navigate(BANK_ACCOUNT_SCREEN);
          }
        }}
        style={{
          marginTop: 16,
          padding: 16,
          borderWidth: 1,
          borderColor: Colors.grey,
          borderRadius: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {bankAccount?.account_bank ? (
          <View>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                fontWeight: 'bold',
                marginBottom: 4,
              }}>
              {bankAccount?.account_bank_name}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {bankAccount?.account_bank}
            </Text>
            <Text style={{ fontSize: 14, color: Colors.black }}>
              {String(bankAccount?.account_bank_number)}
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
