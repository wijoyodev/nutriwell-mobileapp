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
import React, { useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import Colors from 'themes/Colors';
import { bankSchema } from './schema/bankSchema';
import CustomPicker from 'components/CustomPicker';
import updateProfile from 'network/auth/update-profile';
import { getUserId } from 'service/StorageUtils';
import useGetBankOptions from './service/useGetBankOptions';
import CustomSnackbar, {
  CustomSnackbarHandle,
} from 'components/CustomSnackbar';

export type BankOption = {
  name: string;
  code: string;
};

const bankOptionList: BankOption[] = [
  {
    name: 'BCA',
    code: 'BCA',
  },
  {
    name: 'BRI',
    code: 'BRI',
  },
  {
    name: 'Mandiri',
    code: 'Mandiri',
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
  const { bankOptions, fetched } = useGetBankOptions();

  const snackbarRef = useRef<CustomSnackbarHandle | null>();

  const [loading, setLoading] = useState(false);
  const [bankList, setBankList] = useState<BankOption[]>([]);

  useEffect(() => {
    if (fetched) {
      setBankList(bankOptions);
    }
  }, [fetched, bankOptions]);

  let formInitialValues: BankForm = {
    bank: '',
    accountHolder: '',
    accountNumber: '',
  };

  if (params?.data) {
    formInitialValues = {
      bank: `${params?.data.account_bank}#${params?.data.account_bank_code}`,
      accountHolder: params?.data.account_bank_name,
      accountNumber: String(params?.data.account_bank_number),
    };
    console.log('Form initial: ', formInitialValues);
  }

  const formMethods = useForm({
    resolver: yupResolver(bankSchema),
    defaultValues: formInitialValues,
    reValidateMode: 'onChange',
  });

  const {
    control,
    watch,
    handleSubmit: handleFormSubmit,
    formState: { errors },
    setValue,
  } = formMethods;

  const submit: SubmitHandler<BankForm> = async (data: BankForm) => {
    const bankValues = data.bank.split('#');
    setLoading(true);
    updateProfile({
      account_bank_code: bankValues[1],
      account_bank: bankValues[0],
      account_bank_name: data.accountHolder,
      account_bank_number: data.accountNumber,
    })
      .then(response => {
        setLoading(false);
        if (response.result) {
          goBack();
        } else {
          console.log('Failed: ', response);
          snackbarRef?.current?.showSnackbarUnknownError();
        }
      })
      .catch(err => {
        console.log('Error update profile: ', err);
        setLoading(false);
        snackbarRef?.current?.showSnackbarUnknownError();
      });
  };

  const handleSearch = (text: string) => {
    const bankValues = bankOptions.filter(
      item =>
        item.code.toLowerCase().includes(text.toLowerCase()) ||
        item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setBankList(bankValues);
  };

  const bank = watch('bank');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
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

          <CustomPicker
            value={bank}
            onSelect={(item: BankOption) => {
              console.log('Item Bank: ', item);
              setValue('bank', `${item.name}#${item.code}`);
            }}
            items={bankList}
            placeholder="Pilih akun bank"
            error={errors?.bank?.message ?? ''}
            renderValue={(item: string) => item?.split('#')?.[0] ?? ''}
            enableSearch={true}
            placeholderSearch={'Search bank'}
            onChangeSearch={handleSearch}
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
          loading={loading}
          onPress={handleFormSubmit(submit)}
          backgroundColor={Colors.blue}
          text={'SIMPAN'}
        />
      </View>
      <CustomSnackbar ref={el => (snackbarRef.current = el)} />
    </SafeAreaView>
  );
};

export default BankAccountScreen;
