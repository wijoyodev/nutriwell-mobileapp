/* eslint-disable react-native/no-inline-styles */
import { yupResolver } from '@hookform/resolvers/yup';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import CustomButton from 'components/CustomButton';
import CustomTextInput from 'components/CustomTextInput';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { bankSchema } from './schema/bankSchema';
import CustomPicker from 'components/CustomPicker';
import updateProfile from 'network/auth/update-profile';
import { getUserId } from 'service/StorageUtils';

export type BankOption = {
  name: string;
} | null;

const bankOptions = [
  {
    name: 'BCA',
  },
  {
    name: 'BNI',
  },
  {
    name: 'MANDIRI',
  },
];

export type BankForm = {
  bank: string;
  accountHolder: string;
  accountNumber: string;
};

const BankAccountScreen = () => {
  const { goBack } = useNavigation<NavigationProp<ParamListBase>>();
  const { params } = useRoute<RouteProp<ParamListBase>>();

  let formInitialValues: BankForm = {
    bank: '',
    accountHolder: '',
    accountNumber: '',
  };

  if (params?.data) {
    formInitialValues = {
      bank: params?.data.account_bank,
      accountHolder: params?.data.account_bank_name,
      accountNumber: params?.data.account_bank_number,
    };
  }

  const formMethods = useForm({
    resolver: yupResolver(bankSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = formMethods;

  const submit: SubmitHandler<BankForm> = async (data: BankForm) => {
    console.log(data);
    updateProfile({
      account_bank: data.bank,
      account_bank_name: data.accountHolder,
      account_bank_number: data.accountNumber,
    }).then(response => {
      if (response.result) {
        goBack();
      } else {
        console.log('Failed: ', response);
      }
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ fontSize: 14, color: Colors.black, marginTop: 16 }}>
          Akun bank akan digunakan untuk mencairkan reward Anda.{' '}
        </Text>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Bank
          </Text>
          <Controller
            control={control}
            name={'bank'}
            render={({ field: { onChange, value } }) => (
              <CustomPicker
                value={value}
                onSelect={item => onChange(item.name)}
                items={bankOptions}
                placeholder="Pilih akun bank"
                error={errors?.bank?.message ?? ''}
                renderOption={(item: BankOption) => (
                  <Text
                    style={{
                      color: Colors.black,
                      fontSize: 14,
                      paddingVertical: 8,
                    }}>
                    {item?.name}
                  </Text>
                )}
              />
            )}
          />
        </View>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nama Pemilik Rekening
          </Text>
          <Controller
            control={control}
            name={'accountHolder'}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder={'Masukkan nama pemilik rekening'}
                error={errors?.accountHolder?.message ?? ''}
              />
            )}
          />
        </View>

        <View style={{ marginVertical: 16 }}>
          <Text style={{ fontSize: 14, color: Colors.black, marginBottom: 6 }}>
            Nomor Rekening
          </Text>
          <Controller
            control={control}
            name={'accountNumber'}
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                value={value}
                onChangeText={onChange}
                placeholder={'Masukkan nomor rekening'}
                error={errors?.accountNumber?.message ?? ''}
              />
            )}
          />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: Colors.white,
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>
        <CustomButton
          onPress={handleFormSubmit(submit)}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
    </View>
  );
};

export default BankAccountScreen;
